

const MemberShip = () => {
  return (
    <div className='flex-col gap-5 m-3'>
        <div className="flex items-center justify-center w-[100%]">
            <div className='p-2 m-2 bg-slate-900 text-white text-lg rounded-lg font-semibold cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                <div>1 month MemberShip</div>
                <div>1000</div>
            </div>
            <div className='p-2 m-2 bg-slate-900 text-white text-lg rounded-lg font-semibold cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                <div>2 month Membership</div>
                <div>2000</div>
            </div>
        </div>
        <div className="flex gap-10 mt-5 mb-10">
            <input type="number" className="border-2 rounded-lg text-lg w-1/3 h-1/2 p-2" placeholder="Add No. of Months"/>
             <input type="number" className="border-2 rounded-lg text-lg w-1/3 h-1/2 p-2" placeholder="Add No. of Months"/>
             <div className="text-lg border-2 p-1 w-auto mt-0 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ">Add + </div>

        </div>
        <div>

        </div>

      
    </div>
  )
}

export default MemberShip
