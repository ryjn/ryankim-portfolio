import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap } from "lucide-react";
import timelineElements from "./timelineElements";

export const Timeline = ({ darkMode }) => {
  let workIconStyles = { background: "#3B82F6" };
  let schoolIconStyles = { background: "#d4d4d4" };
  let lightContentStyles = { background: "white" };
  let darkContentStyles = { background: "#262626" };

  return (
    <>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="text-neutral-800 dark:text-white"
              contentStyle={darkMode ? darkContentStyles : lightContentStyles}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <Briefcase /> : <GraduationCap />}
              /*position={isWorkIcon ? "left" : "right"}*/
            >
              <h3 className="vertical-timeline-element-title font-bold text-neutral-800 dark:text-white">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle italic text-neutral-800 dark:text-white">
                {element.location}
              </h4>
              <p className="text-neutral-800 dark:text-white">
                {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};
