import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const FriendDetail = () => {
    const [fdDetail, setFdDetail] = useState({});
    let{id} = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setFdDetail(data);
        })
    },[])
    
    return (
        <div>
            <h1>This is Friend component:{id}</h1>
            <h1>Name:{fdDetail.name}</h1>
            <p>Email:{fdDetail.email}</p>
            <p>Website:{fdDetail.website}</p>
        </div>
    );
};

export default FriendDetail;