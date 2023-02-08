import React from 'react'
import { MdWork } from 'react-icons/md'


const WorkHistory = () => {
    return (
        <div className='pt-6 pb-10'>
            <div className=' p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>

                <div className='flex text-[25px] gap-3 '>
                    <MdWork className='text-green-500' />
                    <h3 className='pb-5'>
                        Work History
                    </h3>
                </div>

                <div className='grid gap-[30px]'>
                    <div className='border-b pb-8'>
                        <p>Senior Graphic Designer @ Buildomo</p>
                        <p>
                            2012 - Present</p>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='border-b pb-8'>
                        <p>Senior Graphic Designer @ Buildomo</p>
                        <p>
                            2012 - Present</p>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='border-b pb-8'>
                        <p>Senior Graphic Designer @ Buildomo</p>
                        <p>
                            2012 - Present</p>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkHistory