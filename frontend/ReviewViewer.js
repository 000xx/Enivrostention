import { Link } from 'react-router-dom'
import {useBase, useRecords} from '@airtable/blocks/ui';
import React, { useState } from 'react';
import './ReviewViewer.css';

function ReviewViewer(props){
    const base = useBase();
    const table = base.getTable("Producer");
    const records = useRecords(table);

    const reviews = [];

    for(let i = 0; i < (records.length); i++){
        reviews[i] =(i+1) + ". " + "Producer: " + records[i].getCellValue("Product") + " grade: " +records[i].getCellValue("Grade") + " Comments: " +  records[i].getCellValue("Comments") +" Sources:"+ records[i].getCellValue("Sources")
    } 

    function strike(review){
        if (confirm("Are you sure you would like to remove review: " + review + " this action cannot be undone")== true){
            table.deleteRecordAsync(records[(Number(review) - 1)]);
        }
    }

    


   

    if(props.role == "member"){
        return(
            <div className="Returned">
                {reviews.map((review) => (
                    <div className="user">{review}</div>
                ))}
            </div>
            
        )
    }
    else if(props.role == "admin"){
        return(
            <div className="Returned">
                {reviews.map((review) => (
                    <div className="user">
                        <div >{review}</div>
                        <div className="strike" onClick={() => strike(parseInt(review))}>Strike</div>
                    </div>
                    
                ))}
            </div>
            
        )
    }
    if(props.role == "rando"){
        return(
            <div className="Returned">
                {reviews.map((review) => (
                    <div className="user">{review}</div>
                ))}
            </div>
            
        )
    }
}

export default ReviewViewer;