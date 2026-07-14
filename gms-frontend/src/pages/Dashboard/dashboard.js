import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ErrorIcon from '@mui/icons-material/Error';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from 'react-router-dom';

const handleOnClickMenu = (value)=>{
  sessionStorage.setItem('func',value);
}


const Dashboard = () => {
  return (
    <>
    <div className='w-3/4 h-[100vh] p-8'>
    <div className='w-full bg-slate-900 text-white rounded-lg p-3 flex justify-between items-center '>
      <div> <MenuIcon/> </div>
      <div><img className='w-8 h-8 rounded-full' src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="" /></div>
    </div>

    <div className='mt-4 bg-slate-100 bg-opacity-50 w-full grid gap-5 pb-5 grid-cols-3 overflow-x-auto h-[80%] '>

      
      <Link to={"/Members"} className='bg-white w-full h-fit rounded-lg cursor-pointer border-2 overflow-hidden'>
        <div className='h-2 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200'>

        </div>
        <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
          <PeopleAltIcon sx={{color:"#2563EB" , fontSize:"55px"}}/>
          <p className='font-semibold font-serif'>Joined Members</p>

        </div>
      </Link>
       <Link to={"/specific/monthly"} onClick={()=>handleOnClickMenu("monthlyjoined")} className='bg-white w-full h-fit rounded-lg cursor-pointer border-2 overflow-hidden'>
        <div className='h-2 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200'>

        </div>
        <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
          <SignalCellularAltIcon sx={{color:"#4F46E5",fontSize:"55px"}}/>
          <p className='font-semibold font-serif'>Monthly Joined</p>

        </div>
      </Link>
       <Link to={"/specific/expiring3day"} onClick={()=>handleOnClickMenu("3daysexpire")} className='bg-white w-full h-fit rounded-lg cursor-pointer border-2 overflow-hidden'>
        <div className='h-2 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200'>

        </div>
        <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
          <AccessAlarmIcon sx={{ color:"#F59E0B",fontSize:"55px"}}/>
          <p className='font-semibold font-serif'>Expiring within 3 days</p>

        </div>
      </Link>
       <Link to={"/specific/expiring4days"} onClick={()=>handleOnClickMenu("4daysexpire")} className='bg-white w-full h-fit rounded-lg cursor-pointer border-2 overflow-hidden'>
        <div className='h-2 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200'>

        </div>
        <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
          <AccessAlarmIcon sx={{color:"#F97316",fontSize:"55px"}}/>
          <p className='font-semibold font-serif'>Expiring within 4-7 days</p>

        </div>
      </Link>
       <Link to={"/specific/expired"} onClick={()=>handleOnClickMenu("expired")} className='bg-white w-full h-fit rounded-lg cursor-pointer border-2 overflow-hidden'>
        <div className='h-2 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200'>

        </div>
        <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
          <ErrorIcon sx={{color:"#DC2626",fontSize:"55px"}}/>
          <p className='font-semibold font-serif'>Expired</p>

        </div>
      </Link>
       <Link to={"/specific/inactive"} onClick={()=>handleOnClickMenu("inactive")} className='bg-white w-full h-fit rounded-lg cursor-pointer border-2 overflow-hidden'>
        <div className='h-2 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200'>

        </div>
        <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200'>
          <ReportIcon sx={{  color:"#475569",fontSize:"55px"}}/>
          <p className='font-semibold font-serif'>InActive Members</p>

        </div>
      </Link>
    </div>
    <div className='w-3/4 mb-4 p-3 bg-slate-900 text-white rounded-lg flex justify-between items-center'>Contact Developer For Any Technical Error At +919875698431</div>


    </div>
    </>
  )
}

export default Dashboard