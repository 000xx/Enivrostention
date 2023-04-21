import { Link } from 'react-router-dom'
import {useBase, useRecords} from '@airtable/blocks/ui';
import React, { useState } from 'react';

function ReviewViewerProducts(props){
    const base = useBase();
    const table = base.getTable("Product");
    const records = useRecords(table);

    const reviews = [];

    for(let i = 0; i < records.length; i++){
        reviews[i] =(i+1) + ". " + "Product: " + records[i].getCellValue("Product") + " grade: " +records[i].getCellValue("Grade") + " Comments: " +  records[i].getCellValue("comments") +" Sources: "+ records[i].getCellValue("Sources") + " Producer: " + records[i].getCellValue("producer")
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
                    <div className="user" onClick={() => strike(parseInt(review))}>{review}</div>
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

export default ReviewViewerProducts;