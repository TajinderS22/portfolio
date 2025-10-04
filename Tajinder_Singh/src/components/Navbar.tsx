import React from 'react'

const Navbar = () => {
  return (
    <div className=' sticky max-w-[1920px] mt-4 w-full mx-auto flex' >
        <div className='w-10/12 flex 
        rounded-[200px] justify-between px-6 pr-20 m-auto p-6 items-center bg-[#51CFB3] backdrop-blur-sm '>
            <div className=' text-3xl drop-shadow-xl drop-shadow-amber-500 p-2 font-bold text-amber-950'>
                Tajinder Singh
            </div>
            <div className='list-none text-xl  flex gap-6 '>
                <a href='#About'><li className=' drop-shadow-md drop-shadow-amber-300 p-2 rounded-full px-6 border ' >About</li></a>
                <a href='#Education'><li className=' drop-shadow-md drop-shadow-amber-300 p-2 rounded-full px-6 border ' >Education</li></a>
                <a href='#Projects'><li className=' drop-shadow-md drop-shadow-amber-300 p-2 rounded-full px-6 border ' >Projects</li></a>
                <a href='#Contact'><li className=' drop-shadow-md drop-shadow-amber-300 p-2 rounded-full px-6 border '> Contact me</li></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar