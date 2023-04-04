import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Upload({addTwin}){
   
    const [input , setInput] = useState({'name': '', 'img': '', 'caption': ''})
    const history = useHistory()

    function submitForm(e){
        e.preventDefault()
        fetch('http://localhost:3000/Twins', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': input.name,
                'img': input.img,
                'caption': input.caption
            })
        })
        .then(res => res.json())
        .then(newTwinData =>  {
            addTwin(newTwinData)
            history.push('/gallery')})
    }

    function handleChange(e){
        const key = e.target.name
        const val = e.target.value

        setInput({...input, [key] : val})
       
    }
    
    return (
        <div className="home">
            <section >
                <br></br>
                <br></br>
                <h3>Upload your Twins</h3>
                <form onSubmit={submitForm}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' value={input.name} onChange={(e) => handleChange(e)} />

                <label htmlFor='image'>Image Url</label>
                <input type='text'name='img' value={input.img} onChange={(e) => handleChange(e)}/>

                <label htmlFor='caption'>Caption</label>
                <input type='text'name='caption' value={input.caption} onChange={(e) => handleChange(e)}/>

                <input type='submit' value='Upload' />
            </form>
        </section>
        </div>
    )
}

export default Upload