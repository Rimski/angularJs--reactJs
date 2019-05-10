import React from 'react';
import { Link } from 'react-router-dom';

export class StartScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>Do you want to see:</h1>
                <div>
                    {/* <a href={'http://localhost:8080/#/islands'}> */}
                        <button onClick={()=> {console.log("disabled")}} className="btn btn-outline-secondary" >Islands</button>
                    {/* </a> */}
                    <span className='text-bold'> Or </span>
                    <Link to={'/neibors'}>
                        <button className="btn btn-outline-secondary">Countries with lots of neighbors</button>
                    </Link>
                </div>
            </>
        );
    }
}