import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const Friend = (props) => {
    const{name,email, id} = props.friend;

    const friendStyle={
        border: '1px solid purple',
        borderRadius:'10px',
        margin:"20px",
        padding:"20px", 
    }
    const history = useHistory();
    const handleClick = (fdId) => {
        history.push(`/friend/${fdId}`)
    }
    return (
       
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <Link to={`/friend/${id}`}>
                <button className="btn-success">Details</button>
            </Link> 
           <button onClick={()=>handleClick(id)}> </button>
        </div>
    );
};

export default Friend;