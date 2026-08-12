import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imagesDirectory = path.resolve("src/images");
const supportedExtensions = new Set([".jpg", ".jpeg"]);

async function findImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      images.push(...(await findImages(entryPath)));
    } else if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(entryPath);
    }
  }

  return images;
}

const imagePaths = await findImages(imagesDirectory);
let originalBytes = 0;
let optimizedBytes = 0;

for (const imagePath of imagePaths) {
  const outputPath = imagePath.replace(/\.(jpe?g)$/i, ".webp");
  const image = sharp(imagePath).rotate();
  const originalFile = await stat(imagePath);

  const result = await image
    .webp({
      quality: 75,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  originalBytes += originalFile.size;
  optimizedBytes += result.size;

  console.log(`${path.relative(imagesDirectory, imagePath)} → ${path.basename(outputPath)}`);
}

const savings = originalBytes
  ? Math.round((1 - optimizedBytes / originalBytes) * 100)
  : 0;

console.log(
  `Optimización completa: ${imagePaths.length} imágenes, ${savings}% menos peso.`,
);
