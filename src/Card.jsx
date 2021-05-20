import React from 'react'

const MyCard = ({name, body, heading}) => {
    return (
        <div className='card'>
            <div>{name}</div>
            <div>{heading}</div>
            <div>{body}</div>
        </div>
    )
}

export default MyCard
