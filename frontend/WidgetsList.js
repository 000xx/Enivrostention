import { useBase,useRecords } from "@airtable/blocks/ui";
import React from 'react';

export default function WidgetsList(props){
    const searchTerm = props.searchTerm
    const base = useBase()
    const table = base.getTable('Review')
    const records = useRecords(table)

    return <div>
        <div>{records[0].getCellValue('Name')} </div>
        <div> Term: {searchTerm}</div>
    </div>
}