import React from 'react'
import { BsFillPersonFill, BsSearch } from 'react-icons/bs'
import { AiFillTrophy } from 'react-icons/ai'

const ContentWork = () => {
    return (
        <div className='flex justify-center items-center flex-wrap pt-[90px] pb-[90px] gap-4'>
            <div className='flex flex-col justify-center max-w-sm items-center'>
                <BsFillPersonFill className='text-[90px]' />
                <h3>Create Account</h3>
                <p className='text-center text-sm pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente, est unde amet dicta alias enim impedit quaerat.</p>

            </div>
            <div className='flex flex-col justify-center max-w-sm items-center'>
                <BsSearch className='text-[90px]' />
                <h3>Search Jobs</h3>
                <p className='text-center text-sm pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente, est unde amet dicta alias enim impedit quaerat.</p>

            </div>
            <div className='flex flex-col justify-center max-w-sm items-center'>
                <AiFillTrophy className='text-[90px]' />
                <h3>Apply</h3>
                <p className='text-center text-sm pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente, est unde amet dicta alias enim impedit quaerat.</p>

            </div>
        </div>
    )
}

export default ContentWork
