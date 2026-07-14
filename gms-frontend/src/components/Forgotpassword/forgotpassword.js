import React from 'react'
import {useState} from 'react'

const Forgotpassword = () => {
    const[emailSubmit,setEmailSubmit]=useState(false)
    const[otpValidate,setOtpValidate]=useState(false)
    const[content,setContent]=useState("Submit your EmailId")

    const handleSubmit=()=>{
        if(!emailSubmit){
            setEmailSubmit(true)
            setContent("Submit your OTP")
        }
        else if(emailSubmit && !otpValidate){
            setOtpValidate(true)
            setContent("Submit New Password")
        }
    }

  return (
    <div className='w-full'>
        <div className='w-full '>
            <div className='m-2 ml-3'>Enter Your Email</div>
            <input type="text" className='w-1/2 m-2 p-2 rounded-lg border-2 border-slate-400'/>
        </div>
         {emailSubmit && <div className='w-full '>
            <div className='m-2 ml-3'>Enter Your OTP</div>
            <input type="text" className='w-1/2 m-2 p-2 rounded-lg border-2 border-slate-400'/>
        </div>}
       {otpValidate && <div className='w-full '>
            <div className='m-2 ml-3'>Enter Your New Password</div>
            <input type="text" className='w-1/2 m-2 p-2 rounded-lg border-2 border-slate-400'/>
        </div>}
        


        <div className='bg-slate-800 text-white mx-auto text-center rounded-lg p-2 m-2 w-2/3 font-semibold cursor-pointer hover:bg-white hover:text-black border-2' onClick={()=>handleSubmit()}>{content}</div>
      
    </div>
  )
}

export default Forgotpassword
