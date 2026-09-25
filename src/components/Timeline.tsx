import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Aug 2025 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Scientist and Full Stack Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Whizhack Technologies, Gurgaon, India
            </h4>
            <p>
              Full-stack Web Development, Data Science, Project Management,
              Business Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - Jan 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Machine Learning Engineer and Data Scientist Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Trumpf, Stuttgart, Germany
            </h4>
            <p>AI Enginnering, Team Leading</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2021 - Feb 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Big Data Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TCS, New Delhi, India
            </h4>
            <p>ETL Pipeline Development, Database Management, Monitoring</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
