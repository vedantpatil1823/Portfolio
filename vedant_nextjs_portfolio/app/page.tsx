
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Page(){
  return(
    <div>
      <Navbar/>

      <section id="hero" className="pt-32 pb-20 text-center px-6">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
        className="text-4xl font-bold mb-3">Vedant Sachin Patil</motion.h1>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.6}}
        className="text-[#9aa4b2] max-w-xl mx-auto">
          B.Sc Computer Science • Full-Stack Developer • AI Enthusiast
        </motion.p>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-[#c8d0da]">I am a motivated CS student creating interactive web apps & AI tools.</p>
      </section>

      <section id="projects" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="space-y-6">
          <div className="bg-white/5 p-5 rounded-xl">Interactive Data Structures Visualizer</div>
          <div className="bg-white/5 p-5 rounded-xl">AI Chatbot Web App</div>
          <div className="bg-white/5 p-5 rounded-xl">NatureMedica (SIH Project)</div>
        </div>
      </section>

      <section id="skills" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['JavaScript','Python','React','Next.js','AWS','Docker'].map(s=>
            <span key={s} className="px-4 py-2 bg-white/5 rounded-lg">{s}</span>
          )}
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-12 pb-20">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-[#c8d0da]">Email: patilvedantcs232406@gmail.com</p>
        <p className="text-[#c8d0da]">Phone: +91 91373 07792</p>
      </section>
    </div>
  );
}
