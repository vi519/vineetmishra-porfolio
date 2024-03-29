
"use client"
  import React, { useEffect } from "react";

function ProjectCard({ title, description, link , isDarkMode,customStyle}) {
  const [hovered, setHovered] = React.useState(false);

  useEffect(()=>{},[isDarkMode])

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-sm rounded-lg shadow-md border border-gray-200 overflow-hidden relative"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #f3f3f3, #e0e0e0)",
      ...(isDarkMode ? customStyle : { backgroundImage: "linear-gradient(to bottom right, #f3f3f3, #e0e0e0)"})}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-6">
        <div className="font-bold text-2xl mb-4 text-gray-800" style={isDarkMode ? customStyle : null}>{title}</div>
        <p className="text-gray-700 text-base" style={isDarkMode ? customStyle : null}>{description}</p>
      </div>
      {hovered && (
        <div
          className="absolute inset-0 bg-gray-800 opacity-50 transition-opacity duration-300"
          style={{ zIndex: 10 }}
        ></div>
      )}
    </a>
  );
}

function Projects(props) {
  
  

    const projectData = [
        {
          title: "💲 Bitcoin Chart Model",
          description:
            "An application offering real-time Bitcoin data presented through visually appealing and diverse charts.",
          link: "https://vi519.github.io/buyucoin_assignment/",
        },
        {
          title: "📈 Stock Tracking App",
          description:
            "A React Native app developed for tracking stocks around the world.",
          link: "https://github.com/vi519/Stock-Tracker-React-Native-App",
        },
        {
          title: "📅 Calendar: Fix your meetings",
          description:
            "Your go-to React calendar app for seamless scheduling and organization.",
          link: "https://vi519.github.io/react-scheduler/",
        },
        {
          title: "💡 Interview Rounds",
          description: "Share and Prepare for interview rounds with this application.",
          link: "https://vi519.github.io/InterviewRounds/",
        },
        {
          title: "💰 Expense Tracker",
          description:
            "An app that gives you a brief idea about expenses in day/month/year. It has credit/debit features that come in handy.",
          link: "https://vi519.github.io/Expense-Tracker/",
        },
        {
          title: "📰 News24*7",
          description:
            "An app providing real-time news from a REST API to enhance your knowledge and keep you informed about what's happening around the world. This application has features like Google News.",
          link: "https://github.com/vi519/News24-7",
        },
      ];
    

  return (
    <div className="container mx-auto" >
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            isDarkMode={props.isDarkMode}
            customStyle={props.customStyle}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
