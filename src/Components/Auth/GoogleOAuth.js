import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const GoogleOAuth = () => {
    const navigate = useNavigate();
    return (
        <div>
            <>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        var decoded = jwt_decode(credentialResponse.credential);
                        console.log(decoded);
                        setTimeout(() => {
                            navigate('/home');
                        },2000);
                    }}
                    onError={() => {
                        console.log('Login Failed !!!');
                    }}
                />
            </>
        </div>
    )
}

export default GoogleOAuth
