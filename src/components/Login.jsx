import React from 'react'
import GoogleLogin from 'react-google-login';

const Login = () => {

    const responseGoogle = (response) => {
        console.log(response.profileObj);
      }

    return (
       <div class="login">
            <GoogleLogin
            clientId="831405529059-rpn2t8cetre42e7qjst57alphauch37d.apps.googleusercontent.com"
            buttonText="Iniciar Sesion"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />

           <br/><br/> 
       </div> 
    )
}
export default Login