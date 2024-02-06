import React from 'react'
import UserReviewComponent from './UserReviewComponent'
import CommentInputComponent from './CommentInputComponent'
import CommentTextComponent from './CommentTextComponent'
import ReplyInputComponent from './ReplyInputComponent'

const ReviewListComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='border-2 p-4'>
                    {/* Restaurant Name */}
                    <h1 className='mb-10'>Chimney Sizzlers Reviews</h1>
                    {/* Review List */}
                    <UserReviewComponent/>
                    <CommentInputComponent/>
                    <CommentTextComponent/>
                    <ReplyInputComponent/>
                </div>
            </>
        </div>
    )
}

export default ReviewListComponent
