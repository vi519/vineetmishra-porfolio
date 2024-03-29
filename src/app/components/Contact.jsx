import React from 'react';

function Contact(props) {
  const email = 'vineetmishrahbk@gmail.com';

  return (
    <div className="flex flex-col items-center text-center text-2xl my-6">
      
      <p className="text-gray-700 mt-4 text-lg"  style={props.isDarkMode ? {color:props.customStyle.color}:null}>
        If you{`'`}d like to discuss a project, hire me, or just say hi, my inbox is open for all!
      </p>
      
      <button
        className="text-gray-700 hover:text-black mt-6 text-xl font-bold border-2 border-gray-500 px-4 py-2 rounded-full transition-transform transform hover:scale-105"
        onClick={() => window.open(`mailto:${email}?subject=Subject&body=Body%20goes%20here`)}
        style={props.isDarkMode ? {color:props.customStyle.color}:null}>
        {email}
      </button>
    </div>
  );
}

export default Contact;