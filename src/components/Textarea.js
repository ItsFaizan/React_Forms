import React from 'react';

 const Textarea = () => {
         return (
                <form >
                    <label>
                        Write your post:
                        <textarea name="postContent" defaultValue="I really enjoyed biking yesterday!" rows={4} cols={40} />
                    </label>
                </form>
    )
 }

 export default Textarea;