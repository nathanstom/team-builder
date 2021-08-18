import React from 'react';


export default function Member(props) {
    const {member} = props;
    return (
        <div className='member-container'>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <button>Edit</button>
        </div>
    )

} 