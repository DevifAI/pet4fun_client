import AboutArea from "./areas/AboutArea";
import Breadcrumb from "./areas/Breadcrumb";
import CounterArea from "./areas/CounterArea";
import FaqArea from "./areas/FaqArea";

const About = () => {
  return (
    <main className="fix">
      <Breadcrumb />
      <AboutArea />
      <CounterArea />
      <FaqArea />
    </main>
  );
};

export default About;
