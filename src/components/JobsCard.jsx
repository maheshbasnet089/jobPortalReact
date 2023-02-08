import React from 'react'
import { MdOutlineHomeWork } from 'react-icons/md'
import { GrPersonalComputer } from 'react-icons/gr'
import { FcSalesPerformance } from 'react-icons/fc'
import { GiFarmTractor } from 'react-icons/gi'






const JobsCard = () => {
    return (
        <div className='flex flex-wrap w-[90%] m-auto gap-5 sm: justify-center   md:justify-between pt-8 '>
            <div className='shadow-2xl w-[200px] h-[200px] flex justify-center items-center flex-col'>

                <div className='bg-green-600 h-20 w-20 rounded-full items-center flex justify-center border-black'>
                    <MdOutlineHomeWork className='text-sky-800 text-[30px]' />
                </div>
                <h3 className='text-center pt-2'>finance</h3>
                <p className='text-center text-[10px]'>(8100)</p>
            </div>
            <div className='shadow-2xl w-[200px] h-[200px] flex justify-center items-center flex-col'>
                <div className='bg-orange-300 h-20 w-20 rounded-full items-center flex justify-center border-black'>
                    <GrPersonalComputer className='text-sky-800 text-[30px]' />
                </div>
                <h3 className=' pt-2'>technology</h3>
                <p className='text-center text-[10px]'>(10200)</p>
            </div>
            <div className='shadow-2xl w-[200px] h-[200px] flex justify-center items-center flex-col'>
                <div className='bg-red-600 h-20 w-20 rounded-full items-center flex justify-center border-black'>
                    <FcSalesPerformance className='text-sky-800 text-[30px]' />
                </div>
                <h3 className=' pt-2'>Sales/Marketing</h3>
                <p className='text-center text-[10px]'>(4000)</p>
            </div>
            <div className='shadow-2xl w-[200px] h-[200px] flex justify-center items-center flex-col'>

                <div className='bg-green-900 h-20 w-20 rounded-full items-center flex justify-center border-black'>
                    <GiFarmTractor className='text-white text-[30px]' />
                </div>
                <h3 className=' pt-2'>Agriculture</h3>
                <p className='text-center text-[10px]'>(8100)</p>
            </div>

        </div>
    )
}

export default JobsCard
