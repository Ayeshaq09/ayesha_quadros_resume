import React from 'react'

const Education = ({education}) => {
    return (
        <div className='education'>
        <h2 className='education-heading'>Education</h2>
        {education.map((item,index) => {
            const {standard,board,percentage,year,achievments} = item
            return (
            <div key={index} className='education-item'>
                <div className='std-marks'>
                    <p className='bold'>{standard}&nbsp;|&nbsp;</p>
                    <p className='bold'>{percentage}%</p>
                </div>
                <div className='board-year'>
                    <p>{board}&nbsp;|&nbsp;</p>
                    <p>{year}</p>
                </div>
                <p>{achievments}</p>
            </div>
            )
        })}
        <hr className='green-border'/>
        </div>
        
    )
}

export default Education