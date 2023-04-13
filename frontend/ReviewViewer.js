import { Link } from 'react-router-dom'
import {useBase, useRecords} from '@airtable/blocks/ui';
import React, { useState } from 'react';

function ReviewViewer(){
    const base = useBase();
    const table = base.getTable("Producer");
    const records = useRecords(table);

    const reviews = [];

    for(let i = 0; i < records.length -1; i++){
        reviews[i] = "Product: " + records[i].getCellValue("Product") + " grade: " +records[i].getCellValue("Grade") + " Comments: " +  records[i].getCellValue("Comments") +" Sources:"+ records[i].getCellValue("Sources")
    } 


   


    return(
        <div className="Returned">
            {reviews.map((review) => (
                <div className="user">{review}</div>
            ))}
        </div>
        
    )
}

export default ReviewViewer;