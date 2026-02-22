import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";
import { BookOpen } from "lucide-react";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I am a Computer Science and Business Systems student driven by curiosity
          and structured problem solving. I enjoy building intelligent systems and
          responsive web applications that combine clean design with efficient logic.
        </p>
        <p className="body-text max-w-2xl mt-6">
          With experience in AI workflows, data driven development and modern web
          technologies, I focus on creating solutions that are both technically
          sound and practically impactful.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I believe good technology is not just about writing code but about
          designing systems that scale, communicate clearly and solve meaningful
          problems.
        </p>
        <p className="body-text max-w-2xl mt-6">
          Alongside technical development, I value clear communication, strategic
          thinking and the ability to translate complex ideas into practical
          outcomes. I am particularly interested in how technology and business
          align to create solutions that are not only functional but sustainable
          and impactful.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
