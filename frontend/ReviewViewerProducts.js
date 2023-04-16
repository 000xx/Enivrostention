import { Link } from 'react-router-dom'
import {useBase, useRecords} from '@airtable/blocks/ui';
import React, { useState } from 'react';

function ReviewViewerProducts(){
    const base = useBase();
    const table = base.getTable("Product");
    const records = useRecords(table);

    const reviews = [];

    for(let i = 0; i < records.length -1; i++){
        reviews[i] = "Product: " + records[i].getCellValue("Product") + " grade: " +records[i].getCellValue("Grade") + " Comments: " +  records[i].getCellValue("comments") +" Sources: "+ records[i].getCellValue("Sources") + " Producer: " + records[i].getCellValue("producer")
    } 


   


    return(
        <div className="Returned">
            {reviews.map((review) => (
                <div className="user">{review}</div>
            ))}
        </div>
        
    )
}

export default ReviewViewerProducts;