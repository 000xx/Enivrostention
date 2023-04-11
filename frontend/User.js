import { useNavigate, Link } from 'react-router-dom'
import React, { useState } from 'react';
import {useBase, useRecords} from '@airtable/blocks/ui';
function User(props){
    const user = props.name
    const role = props.role
    const loggedIn = props.loggedIn

    if(loggedIn == true){
        return (
            <div>Signed in as {props.name}</div>
        )
    }else{
        return(
            <div>
                Not signed in
            </div>
        )
    }
}


export default User;