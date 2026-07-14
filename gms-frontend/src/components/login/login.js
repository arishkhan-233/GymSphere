import React from 'react'
import {useNavigate} from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    sessionStorage.setItem("isLogin",true)
    navigate("/dashboard")
  }
  return (
   <div className="w-1/3 h-[54%] p-10 mt-[80px] ml-40 bg-black/45  rounded-lg ">
        <div className="font-sans text-white m-3 text-center font-medium text-[20px]  ">Login</div>
        <input type="text" placeholder="Enter UserName" className="p-3 rounded-lg mt-4 w-full"/>
        <input type="password" placeholder="Enter Password" className="p-3 rounded-lg mt-8 w-full"/>
        <div className="p-2 w-[80%] bg-slate-800 mx-auto rounded-lg text-white text-center text-lg m-8 hover:bg-white hover:text-black font-semibold cursor-pointer " onClick={()=>{handleLogin()}}>Login</div>
        </div>
  )
}

export default Login