import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { auth } from './firebase'
import firebase from 'firebase/app'
const Login = () => {
    
    return (
        <div>
            <div id="login-page">
                <div id="login-card">
                    <h2>Welcome to UniChat!</h2>
                    <div
                        className='login-button google'
                        onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                        <GoogleOutlined/> Sign in with Google
                        
                    </div>
                        <br /> <br />
                    <div
                        className='login-button facebook'
                        onClick={()=> auth.signInWithRedirect(new auth.FacebookAuthProvide())}
                    >
                        <FacebookOutlined/> Sign in with Facebook
                        
                    </div>
                    <br /> <br />
                </div>
            </div>
        </div>
    );
}

export default Login;