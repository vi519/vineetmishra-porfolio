import React from 'react'
import MIT from '../assets/mit.png'
import Image from 'next/image'
import raisoni from '../assets/raisoni.webp'

function Education(props) {
    return (
        <div class="education">


            <div class=" flex flex-col justify-around md:flex-row  ">

                <div class=" flex flex-col justify-center h-auto rounded overflow-hidden   py-4 text-center ">
                    <Image src={MIT} width={500} className="px-6" alt="" />
                    <div  style={props.isDarkMode ? {color:props.customStyle.color}:null} >
                        <div class="font-bold text-xl mt-4">Master{`'`}s of Computer Applications- 2021</div>
                        <p class="text-gray-700 text-base"  style={props.isDarkMode ? {color:props.customStyle.color}:null}>
                            CGPA- 8.82</p>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Education