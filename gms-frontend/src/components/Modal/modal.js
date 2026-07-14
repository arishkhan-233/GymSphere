import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({handleClose,content,header}) => {
  return (
    <div className='w-full h-[100vh] fixed bg-black bg-opacity-50 text-black top-0 left-0 flex justify-center'>
      <div className='bg-white rounded-lg w-1/2 h-fit mt-32'>
      <div className=' flex justify-between p-3'>
      <div className='text-lg font-semibold'>{header}</div>
      <div className='cursor-pointer' onClick={()=>handleClose()}><CloseIcon/></div>
      </div>
      <div className='mt-15'> {content}</div>
      </div>
      
     
      
    </div>
  )
} 

export default Modal
