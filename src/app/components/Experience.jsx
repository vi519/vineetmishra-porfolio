
"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import "../style/experience.css"
import { useState } from "react";

function Experience(props) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };
  return (
    <div className="timeline"  style={{styles,...props.isDarkMode ? props.customStyle :null}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
    <Timeline  >
      <Timeline.Item className="item">
        <div className="icon">
          <Timeline.Point icon={HiCalendar} class="md: mb-8 text-center mr-8"/>
        </div>

        <Timeline.Content>
          <Timeline.Time>Feb 2024 - Present</Timeline.Time>
          <Timeline.Title className="company-title" style={props.isDarkMode ? props.customStyle :null} >Accelya Group - Senior Engineer</Timeline.Title>
          <Timeline.Body>
            Pune, Maharastra
          </Timeline.Body>

        </Timeline.Content>
      </Timeline.Item>
      
      <Timeline.Item className="item">
        <div className="icon">
          <Timeline.Point icon={HiCalendar} class="md: mb-16 text-center mr-8"/>
        </div>
        <Timeline.Content>
          <Timeline.Time>Feb 2022 - Feb 2024</Timeline.Time>
          <Timeline.Title className="company-title" style={props.isDarkMode ? props.customStyle :null}>CCR Technologies - Software Engineer</Timeline.Title>
          <Timeline.Body>
            Pune, Maharastra
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
     
      <Timeline.Item className="item">
        <div className="icon">
          <Timeline.Point icon={HiCalendar} class="md: mb-4 text-center mr-8"/>
        </div>
        <Timeline.Content>
          <Timeline.Time>May 2021 - Jan 2022</Timeline.Time>
          <Timeline.Title className="company-title" style={props.isDarkMode ? props.customStyle :null}>Bizmetric - Associte Software Engineer</Timeline.Title>
          <Timeline.Body>
            Pune, Maharastra
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      
      <Timeline.Item className="item">
        <div className="icon">
          <Timeline.Point icon={HiCalendar} class="md: mb-4 text-center mr-8"/>
        </div>

        <Timeline.Content>
          <Timeline.Time>Nov 2020 - Apr 2021</Timeline.Time>
          <Timeline.Title className="company-title" style={props.isDarkMode ? props.customStyle :null} >Bizmetric - Internship</Timeline.Title>
          <Timeline.Body>
            Pune, Maharastra
          </Timeline.Body>
         
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className="item">
        <div className="icon">
          <Timeline.Point icon={HiCalendar} class="md: mb-4 text-center mr-8"/>
        </div>
        <Timeline.Content>
          <Timeline.Time>May 2020 - June 2020</Timeline.Time>
          <Timeline.Title className="company-title" style={props.isDarkMode ? props.customStyle :null}>Huda Technology - Internship</Timeline.Title>
          <Timeline.Body>
            Pune, Maharastra
          </Timeline.Body>
         
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className="item">
        <div className="icon">
          <Timeline.Point icon={HiCalendar} class="md: mb-4 text-center mr-8"/>
        </div>
        <Timeline.Content>
          <Timeline.Time>May 2019 - June 2019</Timeline.Time>
          <Timeline.Title className="company-title" style={props.isDarkMode ? props.customStyle :null} >Huda Technology - Internship</Timeline.Title>
          <Timeline.Body>
            Pune, Maharastra
          </Timeline.Body>

        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
  );
}

export default Experience
