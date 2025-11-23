
'use client';
import { useEffect } from 'react';

export default function Navbar(){
  useEffect(()=>{
    const nav=document.getElementById('nav');
    const scroll=()=>{ if(window.scrollY>60) nav?.classList.add('bg-[#0b1020]/70','backdrop-blur-xl','shadow-lg');
                       else nav?.classList.remove('bg-[#0b1020]/70','backdrop-blur-xl','shadow-lg'); };
    window.addEventListener('scroll',scroll);
    return()=>window.removeEventListener('scroll',scroll);
  },[]);

  return (
    <nav id="nav" className="fixed top-0 w-full px-8 py-4 z-50 transition-all">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-[#00e5a8]">Vedant</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-[#00e5a8]">About</a>
          <a href="#projects" className="hover:text-[#00e5a8]">Projects</a>
          <a href="#skills" className="hover:text-[#00e5a8]">Skills</a>
          <a href="#contact" className="hover:text-[#00e5a8]">Contact</a>
        </div>
      </div>
    </nav>
  );
}
