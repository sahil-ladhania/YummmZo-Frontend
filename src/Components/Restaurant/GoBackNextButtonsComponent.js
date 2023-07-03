import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const GoBackNextButtonsComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex jc-sb ai-c h-80'>
                    {/* Go Back Button */}
                    <div>
                        <a href="#" className='flex ai-c fd-r td-n c-b h-40 p-10 b-1-d8d8d8-s shadow br-5'>
                            <FaAngleLeft/>
                            <span>Go back</span>
                        </a>
                    </div>
                    {/* Next Button */}
                    <div>
                        <a href="#" className='flex ai-c fd-r td-n c-b h-40 p-10 b-1-d8d8d8-s shadow br-5'>
                            <span>Next</span>
                            <FaAngleRight/>
                        </a>
                    </div>
                </div>
            </>
        </div>
    )
}

export default GoBackNextButtonsComponent
