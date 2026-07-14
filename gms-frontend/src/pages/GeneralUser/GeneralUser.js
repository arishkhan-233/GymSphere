import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import Membercard from "../../components/Membercard/Membercard";

const GeneralUser = () => {
  return (
    <div className='text-black p-5 w-3/4 flex-col'>
        <div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>
            <Link to={'/dashboard'} className='border-2 rounded-lg pl-3 pr-3 pt-1 pb-1 rounded-2*1 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200'>
                <ArrowBackIcon/>
                Back to Dashboard
            </Link>
        </div>

        <div className='mt-5 text-xl text-slate-900'>
            {"5 Monthly Joined Members"}

        </div>
        <div className='bg-slate-100 p-5 mt-5 rounded-lg grid gap-2 grid-cols-3 overflow-x-auto h-[80%]'>
        <Membercard/>
        <Membercard/>
        <Membercard/>
      </div>
    </div>
  )
}

export default GeneralUser
