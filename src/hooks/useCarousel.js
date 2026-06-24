import { useCallback, useState, useEffect } from "react";

export function useCarousel(emblaApi) {
const [canScrollPrev, setCanScrollPrev] =
    useState(false);

const [canScrollNext, setCanScrollNext] =
    useState(false);

const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(
      emblaApi.canScrollPrev()
    );

    setCanScrollNext(
      emblaApi.canScrollNext()
    );
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off(
        "select",
        updateButtons
      );

      emblaApi.off(
        "reInit",
        updateButtons
      );
    };
  }, [emblaApi, updateButtons]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return {
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  };
}