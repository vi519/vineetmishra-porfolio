"use client"
import React, { useState } from 'react';
import '../style/skills.css'

function Skills(props) {
    const [toogle, setToggle]=useState(false)

  return (

    <div class="skills border-4 border-white-500 rounded-md" style={props.isDarkMode ? props.customStyle :null}>

<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value={toogle} onClick={()=>setToggle(!toogle)} class="sr-only peer"/>
  <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-lg font-medium text-gray-900 dark:text-gray-700" style={props.isDarkMode ? props.customStyle :null}>{toogle?<>Soft Skills</>:<>Technical Skills</>}</span>
</label>
<br/><br/>
      <div className="mb-1 text-base font-medium dark:text-gray-700"> {toogle?<>Communication</>:<>React Js</>}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style={{ width: '95%' }}></div>
      </div>
      <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">{toogle?<>Emotional Intelligence</>:<>Next Js</>}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
      </div>
      <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">{toogle?<>Adaptability</>:<>Python</>}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500" style={{ width: '95%' }}></div>
      </div>
      <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">{toogle?<>Problem-Solving</>:<>Node Js</>}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: '95%' }}></div>
      </div>
      <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">{toogle?<>Leadership Skills</>:<>HTML & CSS</>}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '95%' }}></div>
      </div>
      <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">{toogle?<>Teamwork and Collaboration</>:<>SQL</>}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" style={{ width: '95%' }}></div>
      </div>
      <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">{toogle?<>Time Management & Orangization</>:<>No SQL</>}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{ width: '95%' }}></div>
      </div>

      
      
    </div>
  
  );
}

export default Skills;
