import { Link } from 'react-router-dom'
import React from 'react';
import {useBase} from '@airtable/blocks/ui';
//import './Home.css';
function Home(props) {
  const base = useBase();
  const table = base.getTable("User");
    return (
      <div>
        Welcome {props.name}
        <div>
        </div>
        <div className="Quote">
          “Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has.”
        </div>
        <div className="Quotee">
          - Margaret Mead
        </div>
        <div className="links">
          <div className="link"><Link to="/signup"> Create an Account </Link> </div>
      </div>
      </div>

    );
  }



export default Home;