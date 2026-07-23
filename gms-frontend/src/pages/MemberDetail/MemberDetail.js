import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";
import { useState } from 'react';
const MemberDetail = () => {
    const navigate = useNavigate();
    const [status,setstatus] = useState("pending")
    const [renew,setrenew] = useState(false);
    const handleSwitch = ()=>{
        let statuss = status==="Active"?"pending":"Active";
        setstatus(statuss);
    }
    return (
        <div className='w-3/4 m-2 text-black'>
            <div onClick={() => navigate(-1)} className='border-2 p-2 rounded-xl text-xl text-white w-fit font-sans bg-slate-900 cursor-pointer'>
                <ArrowBackIcon />
                Go back
            </div>
            <div className='mt-10 p-2'>
                <div className='w-[100%] h-fit flex'>
                    <div className='w-1/3 '>
                        <img src="https://tse4.mm.bing.net/th/id/OIP.DyFbFE2jaY1FYj0jC_Lf0QHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                    </div>
                    <div className='w-2/3 text- xl mt-7 p-5'>
                        <div className='mt-1 mb-2 text-2*1 font-semibold'>Name: Arish</div>
                        <div className='mt-1 mb-2 text-2*1 font-semibold'>Mobile: +91847596452</div>
                        <div className='mt-1 mb-2 text-2*1 font-semibold'>Address : Mayur Vihar</div>
                        <div className='mt-1 mb-2 text-2*1 font-semibold'>Joined date : 10-11-2025</div>
                        <div className='mt-1 mb-2 text-2*1 font-semibold'>Next Bill Date : 10-12-2025</div>
                        <div className='mt-1 mb-2 text-2*1 font-semibold'>Status : <Switch onColor="#6366f1" checked={status==="Active"} onChange = {()=>{handleSwitch()}}  /> </div>
                        <div onClick = {()=>{setrenew(prev => !prev) }} className={`mt-1 rounded-lg p-3 border-2 border-slate-900 text-center w-full md:w-1/2 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white ${renew && status==="Active"? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white":null }`}>Renew</div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MemberDetail;