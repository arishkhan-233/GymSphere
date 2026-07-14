import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

const Membercard = () => {
  return (
    <div>
           <div className='p-3 bg-white rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
        <div className='w-28 h-28 rounded-full relative justify-center items-center border-2 p-1 mx-auto'>
          <img className="w-full h-full rounded-full"src="https://wallpapercave.com/wp/wp6130026.jpg" />
          <CircleIcon className='absolute top-0 left-0'sx={{color:"greenyellow"}}/>
        </div>
        <div className='text-center text-xl font-semibold font-serif mt-5'>{"Shubham Gupta"}</div>
        <div className='text-center text-lg font-mono mt-2'>{"+91 9856478515"}</div>
        <div className='text-center text-lg font-mono mt-2'>{"Next Bill Date : 31-12-2024"}</div>

      </div>

      
    </div>
  )
}

export default Membercard
