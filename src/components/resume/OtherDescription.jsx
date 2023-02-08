import React from 'react'
import { ImUserTie } from 'react-icons/im'

const OtherDescription = () => {
    return (
        <div className='pt-6'>
            <div className=' p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>

                <div className='flex text-[25px] gap-3'>
                    <ImUserTie className='text-green-500' />
                    <h3 className='pb-5'>
                        Career Objective
                    </h3>
                </div>

                <p className='text-sm'>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।
                </p>
            </div>

        </div>
    )
}

export default OtherDescription
