import { Link } from 'react-router-dom';
import {useBase, useRecords} from '@airtable/blocks/ui';
import React, { useState } from 'react';
import './ReviewProducts(Review.js).css';
function ReviewProducts() {
    const base = useBase();
    const table = base.getTable("Product");
    const table2 = base.getTable("Producer")
    const records = useRecords(table2)


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

        table.createRecordAsync({"Product":Product, "Grade": Grade, "comments":Comments, "Sources": Sources, "producer": Producer })
        
    }



    return (
        <div>
            <div className="ProductName">
                <label>
                    Product:
                    <input type="text" name="product" onChange={updateProduct} />
                    
                </label>
            </div>
            <div className="ProductName">
                <label>
                    Grade
                    <input type="text" name="grade" onChange={updateGrade} />
                    
                </label>
            </div>
            <div className="ProductName">
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
            <div className="ProductName">
                <label>
                    Producer
                    <input type="text" name="Producer" onChange={updateProducer} />
                    
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



export default ReviewProducts;