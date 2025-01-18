import React, {useState} from 'react'

function TextForm() {

 const [text, setText]= useState('');

 const handleonchange = (event)=> {
    let textarea = event.target;
    setText(textarea);
 }

 const handleonUppercase = ()=> {

    setText(text.toUpperCase());

 }

  return (
   <>
   <div className='container mt-5'>
        <h2>Text UpperCase </h2>
    
        <div class="mb-3 mt-3">
        
        <textarea class="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button className='btn btn-primary' onClick={handleonUppercase} >Convert To Uppercase</button>

    </div>
  
   </>
  )

}

export default TextForm