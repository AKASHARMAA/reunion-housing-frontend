import React from 'react'

function Navbar() {
    return (
        <nav className='grid md:grid-cols-8 grid-cols-2 bg-gray-400 font-semibold items-center md:px-5 p-2'>
            <div className='grid col-span-1 text-3xl my-2 text-left md:text-center pl-5 md:pl-0 cursor-pointer'>
                LOGO
            </div>
            <div className='grid text-right md:text-center col-span-1 my-2 pr-5 md:pr-0 cursor-pointer'>
                Home
            </div>
            <div className='col-span-4 hidden md:block' />
            <div className='grid  col-span-1 py-2 my-2'>
                <button className='active:bg-cyan-300 hover:border border-black py-2 bg-cyan-200 mx-5 rounded-lg'>
                    Login
                </button>
            </div>
            <div className='grid col-span-1 my-2'>
                <button className='active:bg-cyan-300 hover:border border-black py-2 bg-cyan-200 mx-5 rounded-lg'>
                    Signup
                </button>
            </div>
        </nav>
    )
}

export default Navbar
