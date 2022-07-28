
import Header from "./Header";
import Footer from "./Footer";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Layout({ children }) {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
        <Header />
            <div className="z-1 container mx-auto max-w-5xl flex flex-col min-h-screen px-4">
                <main className="flex-1">{children}</main>
            </div>
        <Footer />
    </div>
  );
}

export default Layout;