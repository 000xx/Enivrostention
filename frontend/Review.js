import { Link } from 'react-router-dom'
import {useBase} from '@airtable/blocks/ui';
import React, { useState } from 'react';
import './review.css';
function Review() {
    const base = useBase();
    const table = base.getTable("Producer");


    const [Product, setProduct] = useState("")
    const [Grade, setGrade] = useState("")
    const [Comments, setComments] = useState("")
    const [Sources, setSources] = useState("")

    function updateProduct(event){
        setProduct(event.target.value)
    }
    function updateGrade(event){
        setGrade(event.target.value)
        
    }
    function updateSources(event){
        setSources(event.target.value)
        
    }
    function updateComments(event){
        setComments(event.target.value)
        
    }
    
    function submit(){
        // does the saving
        table.createRecordAsync({"Producer":Product, "Grade": Grade, "Comments":Comments, "Sources": Sources,})
        
    }



    return (
        <div className="ReviewProduct">
            <div className="ProductName">
                <label>
                    Producer:
                    <input type="text" name="producer" onChange={updateProduct} />
                    
                </label>
            </div>
            <div className="ProductName" >
                <label>
                    Grade
                    <input type="text" name="grade" onChange={updateGrade} />
                    
                </label>
            </div>
            <div className="ProductName" >
                <label>
                    Comments:
                    <input type="text" name="comments" onChange={updateComments} />
                    
                </label>
            </div>
            <div className="ProductName">
                <label>
                    Sources
                    <input type="text" name="sources" onChange={updateSources} />
                    
                </label>
            </div>
            
            

            <Link to="/home">
                <button className="ProductName" onClick={submit}>
                    Submit
                </button>
            </Link>
        </div>

    );
}



export default Review;
