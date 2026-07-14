import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
const Slidebar = () => {
  return (
    <div className='w-1/4 h-[100vh] bg-black text-white '>
        <div className='text-center text-3xl p-2 '>Power Zone</div>
        <div className='flex gap-5 my-5 ml-5'>
            <div className='w-[100px] h-[100px] rounded-lg'><img className= 'rounded-full w-[full] h-[full]' alt="gym pic" src="data:image/webp;base64,UklGRkYHAABXRUJQVlA4IDoHAADwKwCdASrJAMgAPp1OokylpCMiIxMJuLATiWlu4XNA/3Nd8mf3ntU/0/K+e1HKteg+5f7j159i/AC9Y/6XeWQAflv9a4gOOX/S+Fr5n7AH8y/wnn6f9H+P87n53/kv2l+A3+Zf3Pq3fuN7HH6kf/QbRdTKhkICVG4L5jhASo3BfMcICVGreD58ZDd/RfsIYqYngpUPyn65gaqkyJyPA2Hs0k7gDxa5YFJptYqRAKRfm3HL+4IDBU7mRPwbqo7TUtxrSF4q0t0/I7tROtnl+2cbHqpUb4RmC/CRD7Vct1Bi+fXiF3wUS+nz5uMVGkMGhVhEC8r1MOEYyAnwR0oBR+2sVp3/xfuypfR4RTlW8FY7OJtU4EyeTDjb6izzNArkBDFwStcXdOnzcF0Cgp8xob1KpnuODkScBE/BXMjkhuygUrXDxTGTaoNeEzpQkz15r7A2ET8xwgXyyNONwXzHCAlRuC+Y4QEqNSAA/v8eiAAAG7OUxkIMby5BOCCZGsfHqfdrqMcupL8nUdBwTd4fUY3voaM13C+Y4djno1aJBf1fl0jV/vre/R6PjO22gEGJEYbNfrxkseJ3wx47RhHkBPXcWTAvFnpmAiqf2nM7KXJCwrUUXC9tiYKZ2IRGLTtcmJSZLQ12QrZmgtiY78+nSfC8GhL96eCYvWFInTP33hU4D34zaCFDoWHKkLiPJkJc0TYFh2UzMj47bxiQ2EdTg4uVq9PgKutjMtWm0zPYww0g7A0xWm37MU7TNyCvrAMXHgkZ3qOmI9hw/F1q4lEaNxlMTVfW/8OmSaI9qkKLwgwlB2YAJbRfLjOATVJk0aClyiOE21L8Syg8n7gEsHjviGy5OF5VZ20AoaDataF4bxcHXrexr0Rl+cs1SUD/C0dE/jsAKRPmnaQepFk8ox+DJoWfG60rQ+6W2GPbvfS/3NFqf6O9C6Pbqw9S0A1PQGoPJpjrrE6v5nnEnADHKWIsigLoRkbpGmoY7Q/yM8YaEGiiOisnhrLa/yPbm4bxTu1i6X8C5U+sIOmB10W1MgrxI40YyG6F9aOcg/ugx4K51K3z140leeUdEyqUZDNLBghKXiVysyT88PQiVbpOIW/QoveNRR4OL8vC3GRR8reN4cfDe4lqj15xYc2TRCtP1YemD6SiB/rgkxA2OClZ7JXykrTld1dbKCNTQZ9qR+UuaQAwKB+qfY0AoqzvDfNJc/bkva/LP/4H/CKW5uRH3Mz9qg97Uf9Xr/0YuKx8JahOcee4qerp3LczsliCcG97GdET4fMiuOlULQo/GTWiu8UChNS+lt712J4i0i2BrcjeujUuUcf3Yt3OSMudvtxjt4lQ9xDcUcCDPLNqhL5ep9/e/xRMa9igxcpba60/n7cBVE9e66Ow+oRm3t+KNHMnlRp/LVKYSTtFF1Z2wmaEOX8wVa4TiK8RMTer3ebmHuxcgcl2tNkbIH7H6XqERMx4dvkFDm3Mulx4RzaOqVRaj0iRjiyfDZeeBJLNsawhlmagGza+FVw0wjd19d/avxov5EWZY2xqImIyWpGRYYTtfysR32WftMkF7rpkEJfPLDM2Y+TJB7YKdARLiTSozdgAGyGivVc/0PfScdZsjN9Eu6Y/BCqobXInzXAhIBjVZf93j3bkFe+VS5KoNpCbJx84hZv09+Rc4FVn9Ba7RfNxsinixFU/6PmwuO//E3xfl7kkqBYMu1P+meNYeKmR3leMub/Aal7XiBCmrboPow2muDZ2nqZ63oCd4a2SjEp7HOShX53hPWWTmxyEHEaMfjNx+nV2gRSIzdgc/tFfSfnhJSX/5YQy/KSZHdqz31x4VX97MOqgVRGWlzqd/vRpc/iCqPbSQlIWm5Nks/ueWoRDrDKKnpXTav7HtVeet1y4eQ867RVIOS0we3ojNxYQvIeX5OhfzDT+EmQFiXxCA679U/7xepFy8wiUPM6ofh1/CBYok6DFz29mZ9eX1YPvQCIKFtXhK6chEWJoamaMbBPU3hEDFLCdc6D//TKfKh7CxBhCVsSsBSQ40MRNLKPGh3niugkXxWx554cj4MAMNfHqtBVH3aP9xnL+uvlQpsgvL/K/nv2TOyXsInqvG4fcUjM7eej7aibOHx06hsjiFdhK0015ikO6doxVVayw1pW1zjQ4JkiqWLABd9EE2SNascueyuM0X0Nmefe+MJN/NHwB8EsfjtRqffoggE6pL3rfAgJOqwtJ/eVZuhWfY2/VX2rwvq0ZxDI99m/cCedi/Z6BHk/mpd1qVRJVNIDyxRTH0oeeCjcNFlghr6Kf5fYdYnyQ4FX9PICcXuETvP7Vq/Ev9fH29f1W5D9w1blSISt5WHt869vTvXVz+fr2CLbPHPWcu3x9/fkl8OMnEE8ktDv5hso9o93HvaYXaCplNJ6JD1bDsl6iwIS/5+wnJk08Aee1Q9kJkrAbD1OlXdFT51UA9h9tmaoaJ8CTDEnEAAAAAA==" /></div>
            <div>
            <div className='text-2xl mt-2'>Good Morning</div>
            <div className='text-xl mt-1 font-semibold'>admin</div>
            </div>
        </div>
        <div className='mt-10  py-5 px-5 border-t border-gray-700  '>
            <div className='flex font-semibold text-xl gap-8 bg-slate-800 rounded-xl p-3 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black  '>
                <div><HomeIcon/></div>
                <div>Dashboard</div>
            </div>
             <div className='flex font-semibold mt-5 text-xl gap-8 bg-slate-800 rounded-xl p-3 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black  '>
                <div><PeopleAltIcon/></div>
                <div>Members</div>
            </div>
            <div className='flex font-semibold mt-5 text-xl gap-8 bg-slate-800 rounded-xl p-3 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black  '>
                <div><LogoutIcon/></div>
                <div>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Slidebar