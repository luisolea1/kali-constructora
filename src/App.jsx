import { LazyMotion, domAnimation } from 'motion/react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="App">
        <ScrollProgress />
        <Header />
        <Main />
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
