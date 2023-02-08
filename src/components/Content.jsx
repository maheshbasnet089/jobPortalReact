import React from 'react'
import ContentWork from './ContentWork'

const Content = () => {
    return (
        <div className='w-[90%] m-auto'>
            <h1 className='text-center pt-10'>How it Works?</h1>
            <div className='flex justify-center'>
                <p className='text-center pt-5 text-sm w-[500px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium. Soluta commodi earum reiciendis nisi nam nemo!</p>
            </div>
            <div>
                <ContentWork />
            </div>
        </div>
    )
}

export default Content
