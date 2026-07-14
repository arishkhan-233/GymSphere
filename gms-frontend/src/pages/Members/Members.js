import React, { useState, useEffect } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleIcon from "@mui/icons-material/Circle";

import Membercard from "../../components/Membercard/Membercard";
import Modal from "../../components/Modal/modal";
import Addmember from "../../components/Addmember/Addmember";
import MemberShip from "../../components/MemberShip/MemberShip";

const Members = () => {
  const [Member, setMember] = useState(false);
  const [MemberShipOpen, setMemberShipOpen] = useState(false);
  const [StartFrom, setStartFrom] = useState(0);
  const [EndTo, setEndTo] = useState(9);
  const [TotalData, setTotalData] = useState(0);
  const [CurrentPage, SetCurrentPage] = useState(1);
  const [NumOfPage, SetNumOfPage] = useState(0);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let TotalData = 52;

    setTotalData(TotalData);

    let TotalPage = Math.ceil(TotalData / limit);
    SetNumOfPage(TotalPage);

    if (TotalData === 0) {
      setStartFrom(-1);
      setEndTo(0);
    } else if (TotalData < limit) {
      setStartFrom(0);
      setEndTo(TotalData);
    } else {
      setStartFrom(0);
      setEndTo(limit);
    }
  };

  const addMembers = () => {
    setMember((prev) => !prev);
  };

  const handleMemberShip = () => {
    setMemberShipOpen((prev) => !prev);
  };
  const handleprev = ()=>{
    if(CurrentPage!==1){
      let currPage = CurrentPage-1;
      SetCurrentPage(currPage);
      var from = (currPage-1)*9;
      var to = (currPage*9);
      setStartFrom(from)
      setEndTo(to)
    }
  }
   
  const handlenext = ()=>{
    if(CurrentPage!==NumOfPage){
      let currPage = CurrentPage+1;
      SetCurrentPage(currPage);
      var from = (currPage-1)*9;
      var to = (currPage*9);
      if(to>TotalData){
        to = TotalData
      }
      setStartFrom(from)
      setEndTo(to)
      

    }
  }


  
  return (

    <div className='text-black p-5 w-3/4 h-[100vh]'>
    <div className='border-2 w-full bg-slate-900 flex justify-between rounded-lg text-white p-3 h-fit m-2'>
        <div className='border-2 px-3 py-1 rounded-full cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black' onClick={()=>addMembers()}>Add Members <FitnessCenterIcon/></div>
        <div className='border-2 px-3 py-1 rounded-full cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black' onClick={()=>handleMemberShip()}>Membership<AddIcon/></div>
      
    </div>
    <Link className='ml-2 text-black text-sm' to={"/Dashboard"}><ArrowBackIcon/>Back to Dashboard</Link>
    <div className='flex m-3'>
      <input type="text" className='w-1/2 p-3 border-2 rounded-lg' placeholder='Search By Name or Mobile Number' />
      <div className='border-2 flex justify-center align-center p-3 ml-2 rounded-lg bg-black text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'><PersonSearchIcon/></div>
    </div>

    <div className='flex justify-between'>
      <div>Total Members</div>
      <div className='flex'>
      <div>{StartFrom+1}-{EndTo} of {TotalData} Members</div>
      <div className='flex'>
      <div className={`mx-1 border border-black rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${CurrentPage===1?'bg-gray-200 text-gray-400':null }`} onClick={()=>{handleprev()}}><ChevronLeftIcon/></div>
      <div className={`mx-1 border border-black rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${CurrentPage===NumOfPage?'bg-gray-200 text-gray-400':null }`} onClick={()=>{handlenext()}} ><ChevronRightIcon/></div>
      </div>
      </div>
    </div>

    <div className='grid grid-cols-3 gap overflow-x-auto h-[60%] gap-2 p-5 mt-5 rounded-lg bg-slate-100'>
   <Membercard/>
   <Membercard/>
   <Membercard/>
   <Membercard/>
   <Membercard/>
   <Membercard/>
   <Membercard/>
   <Membercard/>
   <Membercard/>

    </div>
    {Member && <Modal header="Add Members" handleClose={addMembers}  content={<Addmember/>}/>}
    {MemberShipOpen && <Modal header="Membership" handleClose={handleMemberShip}  content={<MemberShip/>}/> }
  
    </div>
    
  )

}
export default Members

