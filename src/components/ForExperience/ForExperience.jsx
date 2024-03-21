import React from 'react'

const ForExperience = (props) => {
  return (
  <ul className="resume-box">
             {props.userdata.map((element, index) => (
                
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                {!element.forEducation ? (<>
                 <div className="r-meta">
                    <span>{props.formatDate(element.startDate)} - {props.formatDate(element.endDate)}</span>
                    <label>-{element.jobTitle}</label>
                  </div>
                  <h5>{element.company_name}</h5>
                </>):""} 
                </li>
              ))}
            </ul> 
  )
}

export default ForExperience