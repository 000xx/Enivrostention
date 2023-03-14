import {initializeBlock, useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';

function HelloWorldApp() {
    const base = useBase()
    const productTable = base.getTable('Product')
    const product = useRecords(productTable)
    return <div> 
        {product.map(product => <Product product={product} />)}
        </div>;
}

function Product(props){
    return <div>
        {props.product.getCellValue('Product')}
        {props.product.getCellValue('Grade')}
        {props.product.getCellValue('comments')}
    </div>
}

initializeBlock(() => <HelloWorldApp />);
