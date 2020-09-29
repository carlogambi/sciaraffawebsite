import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


export default (props) => {
    
    const [posts, setPosts] = useState([]);
    
    const fetchData = async () => {
        const rawData = await fetch('https://jsonplaceholder.typicode.com/posts')
        const allData = await rawData.json();
        const data = allData.slice(0,10);
        setPosts(data);
        currentfetchedData = posts;
    };
    
    useEffect(() => {
        fetchData()
    }, [])
    
    return <div>
        <h1>home</h1>
        {
            posts.map(
                p => <Link 
                to={`/post${p.id}`}
                key={p.id}
                >
                        <h4 key = {p.id}>
                            {p.title}
                        </h4>
                </Link>
                )
            }
    </div>
}

export let currentfetchedData;
