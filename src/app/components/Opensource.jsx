

import React from 'react';

function PublicationCard({ title, description, link, imageUrl  , isDarkMode,customStyle}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block max-w-md mx-auto my-8 p-4 bg-white border border-gray-200 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105"
      style={isDarkMode ? customStyle:null}>
      <img src={imageUrl} alt="" className="w-20 h-20 mx-auto mb-4 transition-transform transform group-hover:-translate-y-1" />
      <div className="text-center" style={isDarkMode ? customStyle:null}>
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600" style={isDarkMode ? customStyle:null}>{title}</h2>
        <p className="text-gray-600 group-hover:text-gray-800" style={isDarkMode ? customStyle:null}>{description}</p>
      </div>
    </a>
  );
}

function Opensource(props) {
  const publicationData = [
    {
      title: 'Epic on FHIR Package',
      description: 'Epic on FHIR npm package used for Auth 2.0 via Epic on.',
      link: 'https://www.npmjs.com/package/epic-on-fhir-login',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/npm.svg',
    },
    
    {
      title: 'Security Challenges and Attacks in Wireless Sensor Networks (1st Author)',
      description: 'Exploring WSN topologies and security challenges.',
      link: 'https://www.ijert.org/security-challenges-and-attacks-in-wireless-sensor-networks',
      imageUrl: 'https://www.ijert.org/wp-content/uploads/2018/07/journal-of-engineering-research-logo.png',
    },
  ];

  return (
    <div>

      <div className="flex flex-wrap justify-center" >
        {publicationData.map((publication, index) => (
          <PublicationCard
            key={index}
            title={publication.title}
            description={publication.description}
            link={publication.link}
            imageUrl={publication.imageUrl}
            isDarkMode={props.isDarkMode}
            customStyle={props.customStyle}

          />
        ))}
      </div>
    </div>
  );
}

export default Opensource;