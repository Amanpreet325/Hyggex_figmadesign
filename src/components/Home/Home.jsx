import React from 'react'
import Frame from '../../assets/Frame.png';
import arrow from '../../assets/arrow.png';
import './style.css';
import bulb from '../../assets/bulb.png';
import volume from '../../assets/volume.png';
import redo from '../../assets/redo.png';
import left from '../../assets/left.png';
import right from '../../assets/right.png';
import minimise from '../../assets/minimise.png';
import { useState } from 'react';
const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div className='Home-option'>
        <ul>
            <li><img src={Frame} alt="" className='Hom'/></li>
            <li><img src={arrow} alt="" className='arr'/></li>
            <li>Flashcard</li>
            <li><img src={arrow} alt="" className='arr'/></li>
            <li>Mathematics</li>
            <li><img src={arrow} alt="" className='arr'/></li>
            <li className='special'>Relation and Function</li>
        </ul>
      </div>
      <div className="relation"><div className="content">Relations and Functions ( Mathematics )</div></div>
      
      <div className="w-[546px] h-[29px] justify-center items-center gap-10 inline-flex " style={{ marginLeft: '443px', marginTop:'36px', marginBottom:'32px' }}>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-blue-950 text-xl font-bold font-['Inter']">Study</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-blue-950" style={{marginTop:'-8px'}}></div>
    </div>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-500 text-xl font-medium font-['Inter']">Quiz</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-stone-50"></div>
    </div>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-500 text-xl font-medium font-['Inter']">Test</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-stone-50"></div>
    </div>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-500 text-xl font-medium font-['Inter']">Game</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-stone-50"></div>
    </div>
    <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
        <div className="px-3 justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-500 text-xl font-medium font-['Inter']">Others</div>
        </div>
        <div className="self-stretch h-[0px] border-2 border-stone-50"></div>
    </div>
</div>
<div className="w-[712px] h-[485.19px] flex-col justify-start items-center gap-8 inline-flex " name="mydiv"  >
    <div className="w-[712px] h-[393.19px] justify-start items-start inline-flex relative">
    <div
          className={`w-[712px] relative ${
            isFlipped ? 'rotate-180' : '' // Conditionally apply rotate-180 class
          }`}
        >
            <div className="w-[712px] h-[393.19px] left-[355px] top-0 absolute bg-black rounded-[42.51px]" name="blackbg" />
            <div className="w-[712px] h-[393.19px]  absolute origin-top-left rotate-180 flex-col justify-start items-start inline-flex">
                <div className="w-[712px] h-[393.19px] bg-stone-300 rounded-[42.51px]" />
                <div className="w-[712px] h-[393.19px]  left-[355px ] top-0  absolute bg-gradient-to-bl from-sky-950 via-sky-950 to-cyan-600 rounded-[42.51px] rotate-180">
                    <div className="w-[34.01px] h-[34.01px] left-[643.99px] top-[34.01px] absolute" style={{ backgroundImage: `url('${volume}')` }}/>
                    <div className="w-[34.01px] h-[34.01px] left-[34.01px] top-[34.01px] absolute" style={{ backgroundImage: `url('${bulb}')` }}/>
                    <div className="left-[289.05px] top-[174.28px] absolute text-center text-white text-[38.26px] font-bold font-['Lato'] tracking-wide">5x + 12</div>
                </div>
            </div>
        </div>
        <div className="w-[712px] h-[393.19px] relative">
            <div className="w-[712px] h-[393.19px] left-0 top-0 absolute bg-black rounded-[42.51px]" />
            <div className="w-[712px] h-[393.19px] left-0 top-0 absolute">
                <div className="w-[712px] h-[393.19px] left-0 top-0 absolute bg-stone-300 rounded-[42.51px]" />
                <div className="w-[712px] h-[393.19px] left-0 top-0 absolute bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-600 rounded-[42.51px] ">
                    <div className="w-[34.01px] h-[34.01px] left-[643.99px] top-[34.01px] absolute" style={{ backgroundImage: `url('${volume}')` }}/>
                    <div className="w-[34.01px] h-[34.01px] left-[34.01px] top-[34.01px] absolute" style={{ backgroundImage: `url('${bulb}')` }}/>
                    <div className="left-[199.79px] top-[174.28px] absolute text-center text-white text-[38.26px] font-bold font-['Lato'] tracking-wide">{isFlipped ? '5x + 12' : '9 + 6 + 7x - 2x - 3'}</div>
                </div>
            </div>
        </div>
    </div>
    <div
        className="left-[364px] relative justify-center items-center gap-[140px] inline-flex cursor-pointer"
        onClick={handleClick}
      >
    <img src={redo} alt=""  />
        <div className="justify-start items-center gap-[43px] flex">
        <img src={left} alt="Left Image" className="mr-2" />
            <div className="text-gray-800 text-2xl font-bold font-['Inter']">01/10</div>
            <img src={right} alt="Right Image" className="ml-2" />
        </div>
        <img src={minimise} alt="" />
    </div>
</div>

    </>
  )
}
export default Home
