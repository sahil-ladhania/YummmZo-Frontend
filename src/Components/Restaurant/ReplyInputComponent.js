import React from 'react'

const ReplyInputComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Reply Input Box */}
                    <div className='flex w-4/12 items-center mt-10'>
                        <img className='h-10 border-2 border-black rounded-full mr-2' src='https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg' alt='user-profile'/>
                        <input className='border-2 h-10 w-10/12 outline-none px-2 py-1 rounded-md' type='text' placeholder='Write your reply'/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ReplyInputComponent
