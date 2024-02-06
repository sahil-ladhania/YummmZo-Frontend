import React from 'react'

const CommentTextComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='mt-10 flex items-start w-4/12'>
                    {/* User Profil Photo */}
                    <img className='h-10 border-2 border-black rounded-full mr-4' src='https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg' alt='user-profile'/>
                    <div className='flex flex-col h-24 justify-between'>
                        {/* User Name Who Commented */}
                        <span className='text-lg font-medium'>Sahil</span>
                        {/* Comment Text */}
                        <span className='text-md'>This is a Comment</span>
                        {/* Time & Edit & Delete Button */}
                        <div className='w-60 flex items-center justify-between'>
                            <span className='text-xs'>just now</span>
                            <span className='text-sm cursor-pointer'>Edit</span>
                            <span className='text-sm cursor-pointer'>Delete</span>
                            <span className='text-sm cursor-pointer'>Reply</span>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CommentTextComponent
