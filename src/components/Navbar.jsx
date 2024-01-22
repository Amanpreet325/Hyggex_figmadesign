import React from 'react';
import logo from '../assets/logo.png';
import c40 from '../assets/c40.png';
import h from '../assets/h.png';
import y from '../assets/y.png';
import g from '../assets/g.png';
import e from '../assets/e.png';
import x from '../assets/x.png';
import './styles.css';
import logog from '../assets/logog.png';
import newlogo from '../assets/newlogo1.png';
const Navbar = () => {
  return (
    <>
    <div className='component40 logo-container'>
     < div className='component3-container'  >

     <img src={c40} className='component3'/>
     <div className='component3-subpart'/>     
     <div className="w-[111.54px] h-[113.65px] left-[45px] top-[-28px] absolute">

<img className="w-[50.54px] h-[39.65px] left-[50%] top-[50%] absolute" src={newlogo} />
</div>
     
        
        <img src={h} alt="" className='H' />
        <img src={y} alt="" className='y' />
        <img src={g} alt="" className='g' />
        <img src={g} alt="" className='g' />
        <img src={e} alt="" className='e' />
        <img src={x} alt="" className='x' />
     </div>
<div className='navbar'>
  <ul><li>Home</li>
  <li>Flashcard</li>
  <li>Contact</li>
  <li>FAQ</li>
  <li><button>Login</button></li></ul>
</div>
        </div> 

    </>
  )
}

export default Navbar
