import React from "react";

function LoginForm(){
    return (
        <div>
            <form className='form'>
            <h3>Upload your Twins</h3>

            <label htmlFor='name'>Name</label>
            <input type='text'name='name' value={''} />

            <label htmlFor='image'>Image Url</label>
            <input type='text'name='URL' value={''} />

            <label htmlFor='caption'>Caption</label>
            <input type='text'name='caption' value={''} />

            <input type='submit' value='Upload' />
        </form>
        </div>
    )
}

export default LoginForm