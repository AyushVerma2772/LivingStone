import React from 'react'

export default function TestimonialCard(props) {
  return (
    <>
      <div className="test-card">
        <img src={props.testImage} alt="" className="test-img" />
        <p className="test-para">{props.testPara}</p>
        <h4 className="test-heading">{props.testHeading}</h4>
      </div>
    </>
  )
}
