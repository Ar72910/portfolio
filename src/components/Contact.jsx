import React from 'react'
import vg from "../assets/vg.png"; 
import { useState } from 'react';
import tosat, { toast } from "react-hot-toast";

const Contact = () => {
    const [inputs, setInputs] = useState({name:"", email:"", message:""});

    const changeHandler = (e)=>{
        
        setInputs({...inputs,[e.target.name] : e.target.value});
        console.log(inputs);
       
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        toast.success("Message Sent")
        // console.log(name, email, message);
        

    }
  return (
    <div id = "contact">
        <section>
            <form onSubmit={submitHandler}>
                <h2>Contact Me</h2>
                
                <input 
                type = "text"
                placeholder="Your Name" 
                name="name"
                value = {inputs.name}
                onChange={changeHandler} //event
               
            />



                <input type = "email" placeholder="Your Email"
                    value = {inputs.email}
                    name="email"
                    onChange={changeHandler}
               
                />
                <input type = "text" placeholder="Your Message"
                    value = {inputs.message}
                    name = "message"
                    onChange={changeHandler}
               
                />
                
                
                <button type="submit">Send</button>                      
            </form>
        </section>

        <aside>
            <img src = {vg} alt = "Graphics"/>
       </aside>

    </div>
  )
}

export default Contact