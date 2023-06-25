import React from 'react';

 const Select = () => {


         return (
                <form >
                    <label>
                        Pick ur team?
                        <select name="selectedTeam" multiple={true} defaultValue={["Pakistan", "india"]} >
                            <option value="pakistan">Pakistan</option>
                            <option value="india">India</option>
                            <option value="England">England</option>
                        </select>
                    </label>
                </form>
    )
 }

 export default Select;