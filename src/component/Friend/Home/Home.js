
import Friend from '../Friend';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [friends,setFriends] = useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data=>{
        setFriends(data);
      })
    },[])
    return (
        <div>
            <h1>Total Friend:{friends.length}</h1>
            {
            friends.map(friend => <Friend friend ={friend}></Friend>)
            }
            
      </div>
    );
};

export default Home;