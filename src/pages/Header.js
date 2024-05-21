import React from 'react'
import log from '../Assets/1.png'


export default function Header () {
    return(
        <div  className=' w-screen h-20 bg-white' >
        <header>
            <div className="flex justify-between" >
            <img src={log} alt="pali logo" className="w-16 h-16 justify-center ml-2 pt-5"/>
            <div className="p-2 pt-1"><span  className=""></span></div>
            </div>
        </header>
        </div>
    )
}
