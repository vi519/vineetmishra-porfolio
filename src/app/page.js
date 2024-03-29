
"use client";
import Image from 'next/image';
import './style/main.css';
import React, { useEffect, useRef, useState } from 'react';
import IMG from "./assets/myimage.jpg"
import Projects from './components/Projects';
import Experience from './components/Experience';
import BlogCard from './components/BlogCard';
import Skills from './components/Skills';
import Opensource from './components/Opensource';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';



function RandomTextComponent() {
  const [state, setState] = useState("");
  const texts = ["JavaScript aficionado!", "developer extraordinaire!", "Coding Maestro!", "Problem-Solving Virtuoso!", "Programming Wizard!"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setState(texts[randomIndex]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div className="aboutme">{state}</div>;
}

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const customStyle = {
    color: "white",
    background: "black"
  };

  const custombackground = {
    background: "#232526",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #414345, #232526)",
    background: "linear-gradient(to right, #414345, #232526)",
    fontFamily: "Open sans",
    height: "100%",
    width: "100%",
    
  }


  const styles = {
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };
  const aboutme = useRef(null);
  const projects = useRef(null);
  const blogs = useRef(null);
  const experience = useRef(null);
  const openSource = useRef(null);
  const contact = useRef(null);
  const skills = useRef(null);
  const education= useRef(null);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <main className="main" style={isDarkMode ? custombackground : null} >

   
      <div className="header">
        <div className="header-content">
          <div class="scroll-pos">
         
            <label className="inline-flex items-center cursor-pointer">
  {isDarkMode ? (
    <span  class="px-2"role="img" aria-label="Sun Emoji">
      ☀️ {" " }
    </span>
  ) : (
    <span  class="px-2"role="img" aria-label="Moon Emoji">
    🌙
    </span>
  )}
  <input
    type="checkbox"
    value={isDarkMode}
    onClick={() => setIsDarkMode(!isDarkMode)}
    className="sr-only peer"
  />
  <div className="relative w-16 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
  </div>
</label>
            
          </div>
          <div className="header-line"  >
            <div className="header-topic" style={isDarkMode ? null : { color: "black" }} onClick={() => scrollToDiv(aboutme)}>AboutMe</div>
            <div className="header-topic" style={isDarkMode ? null : { color: "black" }} onClick={() => scrollToDiv(projects)}>Projects </div>
            <div className="header-topic" style={isDarkMode ? null : { color: "black" }} onClick={() => scrollToDiv(blogs)}>Blogs</div>
            <div className="header-topic" style={isDarkMode ? null : { color: "black" }} onClick={() => scrollToDiv(experience)}>Experience</div>
            <div className="header-topic" style={isDarkMode ? null : { color: "black" }} onClick={() => scrollToDiv(skills)}>Skills</div>
            <div className="header-topic" style={isDarkMode ? null : { color: "black" }}onClick={() => scrollToDiv(openSource)}>OpenSource</div>
            <div className="header-topic" style={isDarkMode ? null : { color: "black" }} onClick={() => scrollToDiv(education)}>Education</div>
            <div className="header-topic" style={isDarkMode ? null : { color: "black" }} onClick={() => scrollToDiv(contact)}>ContactMe</div>
          </div>
        </div>
      </div>

      
      <div class="card" ref={aboutme} style={{ ...styles, ...(isDarkMode ? customStyle : null) }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div class="profile-image"><Image class="imgme" src={IMG} /></div>

        <div class="card-content">
          <p class="first-title" >Hi Everyone 👋, I am</p>
          <p className="name" style={isDarkMode ? customStyle : null}>Vineet<br />Mishra</p>

          <p className='profile-content'><b>As a fervent Full Stack Software Artisan 🚀,
            I thrive in architecting dynamic web and mobile applications harnessing a robust technology repertoire.
            With adeptness in Next.js, JavaScript, React.js, Node.js, SQL, NoSQL, Python, and a myriad of avant-garde technologies, I infuse each project with ingenuity and pioneering spirit.</b></p>
          <br />
          <div><a href='https://drive.google.com/drive/folders/1InTkAKs_6-WUSuJr55QG5YnES-NuyOca'>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">╰┈➤ See My Resume </button>
          </a></div>

        </div>

      </div>
      <div class="projects-domain mt-16" ref={projects}>

        <h1 className="text-4xl font-bold text-center mb-8" style={isDarkMode ? { color: "white" } : { color: "black" }}> 🎯 My Projects </h1>
        <Projects isDarkMode={isDarkMode} customStyle={customStyle} />
      </div>

      <div className="container mx-auto py-16" ref={experience}>
        <h1 className="text-4xl font-bold text-center mb-8" style={isDarkMode ? { color: "white" } : { color: "black" }}>🏊 My Experience </h1>
        <Experience isDarkMode={isDarkMode} customStyle={customStyle} />
      </div>

      <div className="container mx-auto py-2" ref={blogs}>
        <h1 className="text-4xl font-bold text-center mb-8" style={isDarkMode ? { color: "white" } : { color: "black" }}> ✍🏻 Blogs</h1>
        <BlogCard isDarkMode={isDarkMode} customStyle={customStyle} />
      </div>

      <div className="container mx-auto py-32 px-4" ref={skills}>
        <h1 className="text-4xl font-bold text-center mb-8" style={isDarkMode ? { color: "white" } : { color: "black" }}> 🥷 Skills</h1>
        <Skills isDarkMode={isDarkMode} customStyle={customStyle} />
      </div>

      <div className="container mx-auto py-4 px-4" ref={openSource}>
        <h1 className="text-4xl font-bold text-center mb-8" style={isDarkMode ? { color: "white" } : { color: "black" }}> 📢 Open Source Contributions </h1>
        <Opensource isDarkMode={isDarkMode} customStyle={customStyle} />
      </div>

      <div className="container mx-auto py-2 px-2" ref={education}>
        <h1 class="text-4xl font-bold text-center mb-2" style={isDarkMode ? { color: "white" } : { color: "black" }}> 🏫 My Academics </h1>

        <Education isDarkMode={isDarkMode} customStyle={customStyle} />
      </div>

      <div className="container mx-auto py-2 px-4 mt-16" ref={contact}>

        <h1 className="text-4xl font-bold text-center mb-2" style={isDarkMode ? { color: "white" } : { color: "black" }}> ☎️ Contact Me </h1>

        <Contact isDarkMode={isDarkMode} customStyle={customStyle} />
      </div>

      <div class="scrollup">
        <ScrollToTopButton />
      </div>




      <footer style={isDarkMode ? { color: "white" } : { color: "black" }}>Build with 
     <a href='https://nextjs.org/'> <div className="flex justify-center ">
  {!isDarkMode ? <svg className="w-32 h-12" xmlns="http://www.w3.org/2000/svg" height="309" preserveAspectRatio="xMidYMid" viewBox="0 0 512 309" width="512"><path   d="m120.81043 80.5613102h96.567895v7.6753487h-87.715838v57.7670991h82.485077v7.675348h-82.485077v63.422619h88.721754v7.675348h-97.573811zm105.21877 0h10.260338l45.467384 63.4226188 46.4733-63.4226188 63.211264-80.5613102-103.850254 150.649363 53.514709 74.12771h-10.662704l-48.686315-67.462275-48.887497 67.462275h-10.461521l53.917074-74.12771zm118.899221 7.6753486v-7.6753486h110.047164v7.6753487h-50.698145v136.5404141h-8.852058v-136.5404141zm-344.928421-7.6753486h11.0650714l152.5808586 228.3226968-63.054372-84.106934-91.33713469-133.3086883-.40236623 133.3086883h-8.85205708zm454.083705 134.2241588c-1.808538 0-3.164943-1.401289-3.164943-3.212184 0-1.810897 1.356405-3.212186 3.164943-3.212186 1.830069 0 3.164943 1.401289 3.164943 3.212186 0 1.810895-1.334874 3.212184-3.164943 3.212184zm8.69821-8.450851h4.736648c.06459 2.565437 1.937721 4.290101 4.693588 4.290101 3.078821 0 4.822769-1.854014 4.822769-5.324899v-21.989457h4.82277v22.011016c0 6.251906-3.617077 9.852139-9.602478 9.852139-5.619388 0-9.473297-3.492442-9.473297-8.8389zm25.38413-.280256h4.779709c.409074 2.953486 3.294124 4.829057 7.449457 4.829057 3.875441 0 6.717429-2.004921 6.717429-4.764383 0-2.371411-1.808538-3.794259-5.920812-4.764383l-4.004619-.970122c-5.619389-1.315057-8.181486-4.031402-8.181486-8.601759 0-5.540482 4.521348-9.226949 11.303367-9.226949 6.308355 0 10.915822 3.686467 11.195715 8.925132h-4.693588c-.452134-2.867252-2.949641-4.65659-6.566718-4.65659-3.810849 0-6.351414 1.832454-6.351414 4.635033 0 2.220503 1.636295 3.492442 5.683978 4.441008l3.423305.840772c6.372946 1.487524 8.999632 4.074517 8.999632 8.752668 0 5.950089-4.607467 9.679672-11.970803 9.679672-6.889671 0-11.518667-3.557118-11.863152-9.119156z"/></svg>
      :<svg aria-label="Next.js logotype" height="18" role="img" viewBox="0 0 394 79"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="var(--geist-foreground)"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="var(--geist-foreground)"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="var(--geist-foreground)"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="var(--geist-foreground)"></path><path clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="var(--geist-foreground)" fill-rule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="var(--geist-foreground)"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="var(--geist-foreground)"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="var(--geist-foreground)"></path></svg>
  }</div></a>
       Author: Vineet Mishra</footer>
    </main>


  );
}
