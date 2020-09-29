import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export default (props) => {

    const id = props.match.params.id;
    const [post, setPost] = useState({});
    
    const fetchData = async () => {
        const rawData = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await rawData.json();
        console.log(data);
        setPost(data);
    };
    
    useEffect(() => {
        fetchData()
    }, [])

    return <div>
        <h1>post</h1>
        {JSON.stringify(post)}
    </div>
}