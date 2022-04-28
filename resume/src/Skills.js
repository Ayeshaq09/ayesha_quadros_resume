import React from 'react';

const Skills = ({skills}) => {
    return (
        <div className='skills'>
        <div>
            <h2>Skills & Proficiences</h2>
            {skills.map((skill,index) => {
                return <div key={index}>
                    <li><p>{skill}</p></li>
                </div>

})}
        </div>
        <hr className='green-border'/>
        </div>
    )
}

export default Skills