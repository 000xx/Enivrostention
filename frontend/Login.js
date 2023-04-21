import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react';
import {useBase, useRecords} from '@airtable/blocks/ui';
import User from './User';
import './Login.css';
function Login(props) {

        const base = useBase();
        const table = base.getTable("User");
        const records = useRecords(table);

        const tableRemoved = base.getTable("Removed_Users");
        const recordsRemoved = useRecords(tableRemoved);


    
    
        const [loginValue, setLoginValue] = useState("")
        const [password, setPassword] = useState("")
        const loggedIn = false

        const userRecord = records.filter(records =>{
            return records.getCellValue("Name") == loginValue;
        })

        const userRecordRemoved = recordsRemoved.filter(recordsRemoved =>{
            return recordsRemoved.getCellValue("Name") == loginValue;
        })


    
        function updateName(event){
            setLoginValue(event.target.value)
        }
        function updatePassword(event){
            setPassword(event.target.value)
        }
        function submit(){

            try{
                if(userRecord[0].getCellValue("Name") == loginValue && userRecord[0].getCellValue("Password") == password){
                    props.loggedIn(userRecord[0].getCellValue("Name"),userRecord[0].getCellValue("role"))
                }
                else if(userRecordRemoved[0].getCellValue("Name") == loginValue && userRecordRemoved[0].getCellValue("Password") == password){
                    props.loggedIn("removed", "removed")
                }
                
            }catch(err){
                
            }
            try{
                if(userRecordRemoved[0].getCellValue("Name") == loginValue && userRecordRemoved[0].getCellValue("Password") == password){
                    props.loggedIn("removed", "removed")
                }
                
            }catch(err){
                
            }

            
            
        }
    
    
    
        return(
            <div className="login">
                <div className="loginheader">
                LOGIN
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
                
                
    
                <Link to="/home">
                    <button onClick={submit}>
                        Submit
                    </button>
                </Link>
            </div>
    
        );
}



export default Login;
