import React from 'react'

const SignUpComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Sign up Form */}
                    <div>
                        {/* Sign up with Google Section */}
                        <div>
                            <h1>Create Account</h1>
                            <div>Already have an account ? <a href="#">Log in</a></div>
                            <button><img src="" alt="Google-Icon" />Sign up with Google</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p>----------Or----------</p>
                        </div>
                        {/* Sign up with Number / Email Section */}
                        <div>
                            <input type="number" name="" id="" placeholder='Phone Number'/>
                            <input type="text" name="" id="" placeholder='Name'/>
                            <input type="email" name="" id="" placeholder='Email Address'/>
                        </div>
                        {/* Privacy Policy | Terms & Condition Section */}
                        <div>
                            <p>
                                By creating an account, I agree with YummmZo's <br /> 
                                <a href="#">Privacy Policy</a> and <a href="#">Terms and Condition</a>
                            </p>
                        </div>
                        {/* Create Account */}
                        <div>
                            <button>Create Account</button>
                        </div>
                    </div>
                    {/* Image */}
                    <div>
                        <img src="" alt="Image" />
                    </div>
                </div>
            </>
        </div>
    )
}

export default SignUpComponent
