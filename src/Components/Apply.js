import React from 'react'
import Card from './Card'
import ss from '../Images/ss.jpg'
import tt from '../Images/tt.jpg'
import fill from '../Images/fill.jpg'
import submit from '../Images/submit.jpg'
import '../Styles/Apply.css'


export default function Apply() {
    return (
        <>
            <h2 className='apply-heading'>How To Apply</h2>
            <div className="card-container">
                <Card number="01" cardHeading="Click on Apply" para="Click on the apply button to start the application process" image={ss} />

                <Card number="02" cardHeading="Log In/Sign Up" para="Log in If you already have an account. If you don’t have an account sign up to create one." image={tt} />

                <Card number="03" cardHeading="Fill the Forms" para="Fill all the forms presented with precise and credible information" image={fill}/>

                <Card number="04" cardHeading="Log In/Sign Up" para="Click on the submit button after filling all the forms with the needed data." image={submit} />
            </div>
        </>
    )
}

