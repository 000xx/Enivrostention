import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react';
import {useBase, useRecords} from '@airtable/blocks/ui';
//import './Home.css';
function Login() {
        const base = useBase();
        const table = base.getTable("User");
        const records = useRecords(table);
    
    
        const [loginValue, setLoginValue] = useState("")
        const [password, setPassword] = useState("")

        const userRecord = records.filter(record =>{
            return record.getCellValue("Name") == loginValue
        })

        function login(){
            return userRecord.getCellValue("password") == passwordValue
        }

    
        function updateName(event){
            setLoginValue(event.target.value)
        }
        function updatePassword(event){
            setPassword(event.target.value)
        }
        function submit(){
            if(userRecord.getCellValue("Name") == loginValue && userRecord.getCellValue("Password") == passwordValue){
                
            }
            
            
        }
    
    
    
        return (
            <div>
                log in
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
                
                
    
                <Link to="/">
                    <button onClick={submit}>
                        Submit
                    </button>
                </Link>
            </div>
    
        );
}



export default Login;