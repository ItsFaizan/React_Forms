import React from 'react';

 const InputType = () => {
    function handleSubmit(e){
        e.preventDefault();
       const form = e.target;
       const formData = new FormData(form);
    }

         return (
                <form onSubmit={handleSubmit}>
                
                    <label> 
                       Text input:  <input name='myInput' />
                    </label>
                    <hr />
                    <label>
                        checkbox: <input type = "checkbox" name="checkbox"/>
                    </label>
                    <hr />
                    <p>
                        Radio buttons:
                        <label><input type="radio" name="myradio" value="option1" />  option 1 </label>
                        <label> <input type="radio" name="myradio" value="option2" defaultChecked={true} />     option 2 </label>
                        
                    </p>
                       <hr/>
                    <button type='reset'> Reset form</button>
                    <button type='submit'> Submit form</button>
               
                </form>
    )
 }

 export default InputType;