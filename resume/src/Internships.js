import React from 'react'

const Internships = ({internships}) => {
    return (
        <div className='internships'>
        <h2>Internships</h2>
        {internships.map((item,index) => {
            const {company,year,technologies,tasks} = item
            return <div key={index} className='internship-item'>
            <div>
                <p className='bold'>{company}&nbsp;|&nbsp;</p>
                <p className='bold'>{year}</p>
            </div>
            <p className='bold'>{technologies}</p>
            <p>{tasks}</p>
        </div>
        })}
        </div>
    )
}

export default Internships