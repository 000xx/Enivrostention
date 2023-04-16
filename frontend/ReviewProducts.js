import { Link } from 'react-router-dom'
import {useBase} from '@airtable/blocks/ui';
import React, { useState } from 'react';
//import './Home.css';
function ReviewProducts() {
    const base = useBase();
    const table = base.getTable("Product");


    const [Product, setProduct] = useState("")
    const [Grade, setGrade] = useState("")
    const [Comments, setComments] = useState("")
    const [Sources, setSources] = useState("")
    const [Producer, setProducer] = useState("")

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
    function updateProducer(event){
        setProducer(event.target.value)
        
    }
    
    function submit(){
        // does the saving
        table.createRecordAsync({"Product":Product, "Grade": Grade, "comments":Comments, "Sources": Sources, "producer": Producer })
        
    }



    return (
        <div>
            <div>
                <label>
                    Product:
                    <input type="text" name="product" onChange={updateProduct} />
                    
                </label>
            </div>
            <div>
                <label>
                    Grade
                    <input type="text" name="grade" onChange={updateGrade} />
                    
                </label>
            </div>
            <div>
                <label>
                    Comments:
                    <input type="text" name="comments" onChange={updateComments} />
                    
                </label>
            </div>
            <div>
                <label>
                    Sources
                    <input type="text" name="sources" onChange={updateSources} />
                    
                </label>
            </div>
            <div>
                <label>
                    Producer
                    <input type="text" name="Producer" onChange={updateProducer} />
                    
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



export default ReviewProducts;