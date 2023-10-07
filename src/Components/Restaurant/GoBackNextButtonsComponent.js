import React from 'react';
import { Link } from 'react-router-dom';
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

const GoBackNextButtonsComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex justify-between items-center h-20'>
                    {/* Go Back Button */}
                    <div>
                        <Link to="/addRestaurant" className='flex items-center pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm'>
                            <CiCircleChevLeft className='mr-2 text-xl'/>
                            <span>Go back</span>
                        </Link>
                    </div>
                    {/* Next Button */}
                    <div>
                        <Link to="" className='flex items-center pr-5 pl-5 pt-3 pb-3 bg-slate-200 rounded-sm'>
                            <span>Next</span>
                            <CiCircleChevRight className='ml-2 text-xl'/>
                        </Link>
                    </div>
                </div>
            </>
        </div>
    )
}

export default GoBackNextButtonsComponent
