import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user}</h1>
            <h1>{props.age}</h1>
            <p>I am a student at Dev Bhoomi Utrakhand University.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card