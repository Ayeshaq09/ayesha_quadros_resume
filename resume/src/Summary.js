import React from 'react'

const Summary = ({summary}) => {
    return (
        <>
        <div className='summary'>
            <h2>Professional Summary</h2>
            <p>{summary}</p>
            <hr className='green-border'/>
        </div>
        </>
    )
}

export default Summary