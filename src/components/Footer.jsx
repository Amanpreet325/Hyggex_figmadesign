import React from 'react'
import logo from '../assets/logo.png';
import ellipse from '../assets/Ellipse 1.jpg';
import back from '../assets/back.png';
import rectangle from '../assets/Rectangle.png';
import logii from '../assets/logii.png';
import logog from '../assets/logog.png';
import component40 from '../assets/Component 40.png';
import plus from '../assets/plus.png';
import drop from '../assets/drop.png';
const Footer = () => {
  return (
    <>
    <div className=" mt-[81.80px] ml-[106px] ">
<div className="w-[217px] h-[80.60px] justify-start items-start gap-[21.26px] inline-flex ">
    <div className="w-[80.60px] h-[80.60px] relative">
        <div className="w-[80.60px] h-[80.60px] left-0 top-0 absolute bg-white rounded-full" >
        <img className="w-[80.60px] h-[80.60px] absolute left-0 top-0 rounded-full" src={ellipse} alt="Ellipse Image" /></div>
        <div className="w-[44.69px] h-[34.54px] left-[17.71px] top-[23.03px] absolute" style={{ backgroundImage: `url('${back}')` }}>
            <div className="w-[98.80px] h-[100.66px] left-[-25.67px] top-[-30.34px] absolute"  >
                <img className="w-[98.80px] h-[100.66px] left-0 top-0 absolute"  src={rectangle} style={{borderRadius:'50%'}}/>
                <img
  className="w-[98.80px] h-[100.66px] left-0 top-0 absolute"
  src={logog}
  style={{
    borderRadius: '50%',
    backgroundImage: `url('${logii}')`,
    boxShadow:
      'rgba(6, 40, 110, 0.25) 0px 54px 55px, rgba(105, 102, 113, 0.12) 0px -12px 30px, rgba(105, 102, 113, 0.12) 0px 4px 6px, rgba(6, 40, 110, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px',
  }}
/>

            </div>
        </div>
    </div> 
    <div className="flex-col justify-center items-start gap-[10.63px] inline-flex ">
        <div className="text-zinc-500 text-xs font-bold font-['Inter']">Published by </div>
        <div className="w-[115.14px] h-[34.54px] relative" style={{ backgroundImage: `url('${component40}')` }} />
    </div>
</div>
<div className="w-[299px] h-[60px] ml-[716px] justify-start items-center gap-2 inline-flex">
    <div className="w-[60px] h-[60px] relative" style={{ backgroundImage: `url('${plus}')` }}/>
    <div className="text-[28px] font-semibold font-['Inter']" style={{
  background: `linear-gradient(to right, #06286E, #164EC0)`,
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
}}>
  Create Flashcard
</div>
</div>
</div>
<div className="text-blue-950 text-5xl font-bold font-['Inter'] tracking-tight mt-[154.4px] ml-[104px]" style={{
  background: `linear-gradient(to right, #06286E, #164EC0)`,
  WebkitBackgroundClip: 'text',
  color: 'transparent',
 
}}>FAQ</div>
<div className="w-[848px] h-[238px] flex-col justify-start items-end gap-8 inline-flex mt-[48px] ml-[104px]">
    <div className="w-[848px] h-[58px] px-6 py-[17px] rounded-xl border border-blue-600 justify-center items-center gap-[366px] inline-flex">
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">Can education flashcards be used for all age groups?</div>
        <div className="w-6 h-6 relative flex-col justify-start items-start flex" style={{ backgroundImage: `url('${drop}')` }}
/>
    </div>
    <div className="w-[848px] h-[58px] px-6 py-[17px] rounded-xl border border-blue-600 justify-center items-center gap-[499px] inline-flex">
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">How do education flashcards work?</div>
        <div className="w-6 h-6 relative flex-col justify-start items-start flex" style={{ backgroundImage: `url('${drop}')` }}/>
    </div>
    <div className="w-[848px] h-[58px] px-6 py-[17px] rounded-xl border border-blue-600 justify-center items-center gap-[350px] inline-flex">
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">Can education flashcards be used for test preparation?</div>
        <div className="w-6 h-6 relative flex-col justify-start items-start flex" style={{ backgroundImage: `url('${drop}')` }}/>
    </div>
</div>
</>
  )
}

export default Footer
