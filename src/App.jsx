import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { MotionPathPlugin, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Cocktails from "./components/Cocktails";
import Hero from './components/Hero';
import About from "./components/About";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      {/* <Art /> */}
      {/* <Menu /> */}
      {/* <Contact /> */}
    </main>
  )
}

export default App
