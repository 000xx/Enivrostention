import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react';
import {useBase, useRecords} from '@airtable/blocks/ui';
import User from './User';
//import './Home.css';
function Login(props) {

        const base = useBase();
        const table = base.getTable("User");
        const records = useRecords(table);


    
    
        const [loginValue, setLoginValue] = useState("")
        const [password, setPassword] = useState("")
        const loggedIn = false

        const userRecord = records.filter(records =>{
            return records.getCellValue("Name") == loginValue;
        })


    
        function updateName(event){
            setLoginValue(event.target.value)
        }
        function updatePassword(event){
            setPassword(event.target.value)
        }
        function submit(){
            if(userRecord[0].getCellValue("Name") == loginValue && userRecord[0].getCellValue("Password") == password){
                props.loggedIn(userRecord[0].getCellValue("Name"))
            }
            else{
                return <div>
                    Invalid username or password
                </div>
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