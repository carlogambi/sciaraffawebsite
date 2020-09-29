import React from 'react';
import  {Link} from 'react-router-dom'

export default (props) => {

    return <div>
        <h1>logo</h1>
        <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/about'>
            <li>About</li>
            </Link>
            <Link to='/contacts'>
            <li>Contacts</li>
            </Link>
        </ul>
    </div>
}