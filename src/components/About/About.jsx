import AboutArea from "./areas/AboutArea";
import AboutHeader from "./areas/AboutHeader";
import CounterArea from "./areas/CounterArea";
import FaqArea from "./areas/FaqArea";

const About = () => {
  return (
    <main className="fix">
      <AboutHeader />
      <AboutArea />
      <CounterArea />
      <FaqArea />
    </main>
  );
};

export default About;
