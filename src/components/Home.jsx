import React, { useRef } from 'react'
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import logo1 from "../assets/logo1.png"
import { BsChevronDoubleDown } from "react-icons/bs";
// import BiLinkExternal  from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";


const Home = () => {
    const clientCount = useRef(null);
    const projectsCount = useRef(null);

    const animationClientCount = ()=>{
        animate(0,100,{
            onUpdate:(v)=>(clientCount.current.textContent = v.toFixed())
        })

    };

    const animationProjectCount = ()=>{
        animate(0,500,{
            onUpdate:(v)=>(projectsCount.current.textContent = v.toFixed())
        })

    };

    const animations = {
        h1: { 
            initial : {
            x:"-100%",
            opacity:0
            },
            whileInView:{
                x:0,
                opacity:1
                }
        },
       
        button: { 
            initial : {
            y:"-100%",
            opacity:0
           },

            whileInView:{
                y:0,
                opacity:1
            }
        }
    }
  return (
    <div id = "home">
    <section>
        <div>
            <motion.h1 {...animations.h1}>
                Hi, I Am <br/>Ayush Raj
            </motion.h1>

            <Typewriter
                options={{
                    strings:["A Developer", "A Designer", "A Creater"],
                    autoStart:true,
                    loop:true,
                    wrapperClassName:"typewriterpara",
                    cursor:""
                }}
            />

            <div>
                <a href="mailto:ayushmrv@gmail.com">Hire Me</a>
                
                <a href="#work">Projects <BiTrendingUp/> </a>
                

            </div>

            <article>
                <p>
                 +<motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                </p>
                <span>Clients Worldwide</span>
            </article>

            <aside>
                

                <article>
                    <p>
                        +<motion.span whileInView={animationProjectCount} ref = {projectsCount}></motion.span>
                    </p>
                    <span>Projects Done</span>
                </article>
                
                <article data-special>
                    <p>Contact</p>
                    <span>ayushmrv@gmail.com</span>
                </article>

            </aside>
        </div>


    </section>
                
    <section>
        <img src = {logo1} alt = "Ayush"></img>
    </section>
    
        
    <BsChevronDoubleDown/>
    {/* <BiLinkExternal/> */}
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Home