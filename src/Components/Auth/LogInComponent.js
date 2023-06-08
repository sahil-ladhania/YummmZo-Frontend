import React from 'react'

const LogInComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Log In Form */}
                    <div>
                        {/* Log In with Google Section */}
                        <div>
                            <h1>Log in to YummmZo</h1>
                            <div>Dont have an account yet ? <a href="#">Sign up for free</a></div>
                            <button><img src="" alt="Google-Icon" />Log in with Google</button>
                        </div>
                        {/* ----- or ----- Section */}
                        <div>
                            <p>----------Or----------</p>
                        </div>
                        {/* Log In with Email & Password Section */}
                        <div>
                            <input type="email" name="" id="" placeholder='name@gmail.com'/>
                            <input type="password" name="" id="" placeholder='Password'/>
                            <a href="#">Forgot Password ?</a>
                        </div>
                        {/* Log In */}
                        <div>
                            <button>Log in</button>
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

export default LogInComponent
