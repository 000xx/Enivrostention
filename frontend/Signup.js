import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react';
import {useBase} from '@airtable/blocks/ui';
import './SignUp.css';
function Signup() {
    const base = useBase();
    const table = base.getTable("User");


    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    function updateName(event){
        setName(event.target.value)
    }
    function updatePassword(event){
        setPassword(event.target.value)
    }
    function submit(){
        // does the saving
        table.createRecordAsync({"Name":name, "Password": password, "role": "Member"})
        
    }



    return (
        <div className="signup">
            <div className="signupheader">
            SIGN UP
            </div>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" onChange={updateName} />
                    
                </label>
            </div>
            <div>
                <label>
                    Password
                    <input type="password" name="password" onChange={updatePassword} />
                    
                </label>
            </div>
            
            

            <Link to="/login">
                <button onClick={submit}>
                    Submit
                </button>
            </Link>
        </div>

    );
}



export default Signup;
