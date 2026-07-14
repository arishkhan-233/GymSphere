import React,{useState} from 'react'
import './signup.css';
import Modal from '../Modal/modal';
import Forgotpassword from '../Forgotpassword/forgotpassword';


const Signup = () => {
    const[forgotPassword,setForgotPassword]=useState(false)
    const handleClose = ()=>{
        setForgotPassword(prev=>!prev);  
    }
  return (
     <div className="customcss w-1/3 h-[60%] p-10 mt-[80px]   ml-40 bg-black/45  rounded-lg overflow-y-auto">
        <div className="font-sans text-white m-2 text-center font-medium text-[17px]  ">Register your Gym here!</div>
        <input type="text" placeholder="Enter GymName" className="p-2 rounded-lg mt-3 w-full"/>
        <input type="text" placeholder="Enter UserName" className="p-2 rounded-lg mt-6 w-full"/>
        <input type="text" placeholder="Enter Email" className="p-2 rounded-lg mt-6 w-full"/>
        <input type="password" placeholder="Enter Password" className="p-2 rounded-lg mt-6 w-full"/>
        <input type="file" className="p-1.8 rounded-lg mt-6 w-full"/>
        <img src="https://static.vecteezy.com/system/resources/previews/017/503/781/large_2x/bodybuilding-emblem-and-gym-logo-design-template-free-vector.jpg" className="h-[250px] w-[250px] mt-3 rounded-lg"/>
        <div className="p-2 w-[80%] bg-slate-800 mx-auto rounded-lg text-white text-center text-lg m-5 hover:bg-white hover:text-black font-semibold cursor-pointer ">Register</div>
        <div className="p-2 w-[80%] bg-slate-800 mx-auto rounded-lg text-white text-center text-lg  hover:bg-white hover:text-black font-semibold cursor-pointer" onClick={()=>handleClose()}>Forgot Password?</div>
        {forgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<Forgotpassword/>}/>}
        </div>

        
        
  )
}

export default Signup
