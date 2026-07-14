import React from 'react'

const Addmember = () => {
  return (
    <div className='text-black'>
      <div className='grid grid-cols-2 text-lg gap-2'>
        <input type="text" placeholder='Name of the joinee' className='p-2 m-2 ml-3 rounded-lg w-[90%] border-2  '/>
        <input type="text" placeholder='Mobile No' className='p-2 m-2 rounded-lg w-[90%] border-2  '/>
        <input type="text" placeholder='Enter Address' className='p-2 m-2 ml-3 rounded-lg w-[90%] border-2  '/>
        <input type="date"  className='p-2 m-2 rounded-lg w-[90%] border-2  '/>
        <select className='p-2 m-2 ml-4 rounded-lg w-[90%] border-2'>
          <option>1 Month Membership</option>
          <option>2 Month Membership</option>
        </select>
        <input type="file"  className='p-2 m-2 rounded-lg w-[90%] border-2  '/>
        <div className='w-1/4 m-1'>
          <img className='w-full h-full rounded'  src={"https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"} alt="" />
        </div>
        <div className='p-2 m-2 ml-3 my-auto rounded-lg w-[30%] items-center text-center border-2 bg-black text-white cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black '>
          Register
        </div>

      </div>
      
    </div>
  )
}

export default Addmember
