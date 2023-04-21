import { Link } from 'react-router-dom'
import {useBase, useRecords} from '@airtable/blocks/ui';
import React, { useState } from 'react';
import './Management.css';


function Management(props){
    const base = useBase();
    const table = base.getTable("User");
    const records = useRecords(table);

    const table1 = base.getTable("Removed_Users");


    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Role, setRole] = useState("")

    const reviews = [];

    for(let i = 0; i < (records.length); i++){
        reviews[i] =(i+1) + ". Name:" + records[i].getCellValue("Name") + " Role: " + records[i].getCellValue("role")
    } 
    
        
    

    function strike(review){
        if (confirm("Are you sure you would like to remove user: " + review + " this action cannot be undone")== true){
            table1.createRecordAsync({"Name":records[(Number(review) - 1)].getCellValue("Name"), "Password": records[(Number(review) - 1)].getCellValue("Password"), "role": "admin"})
            table.deleteRecordAsync(records[(Number(review) - 1)]);
        }
    }
    function promote(review){
        if (confirm("Are you sure you would like to promote user: " + review + " this action cannot be undone")== true){
            table.updateRecordAsync(records[(Number(review) - 1)], {"Name":records[(Number(review) - 1)].getCellValue("Name"), "Password": records[(Number(review) - 1)].getCellValue("Password"), "role": "admin"} );
        }
    }

    


   

    if(props.role == "member"){
        return(
            <div className="Returned">
                <div>
                    Here are our users:
                </div>
                {reviews.map((review) => (
                    <div className="user">{review}</div>
                ))}
            </div>
            
        )
    }
    else if(props.role == "admin"){
        return(
            <div className="Returned">
                <div className="info">
                    Here are our users. Click on them to remove them if they are violating our terms of service.
                </div>
                {reviews.map((review) => (
                    <div className="user">
                        <div>{review}</div>
                        <div className="Strike" onClick={() => strike(parseInt(review))}>Strike</div>
                        <div className="Promote" onClick={() => promote(parseInt(review))}>Promote</div>
                    </div>

                    
                ))}
            </div>
            
        )
    }
}

export default Management;