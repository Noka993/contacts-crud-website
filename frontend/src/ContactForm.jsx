import React, { useState } from 'react'

const ContactForm = ({ existingContact = {}, updateCallback}) => {
    const [firstName, setFirstName] = useState(existingContact.firstName || '')
    const [lastName, setLastName] = useState(existingContact.lastName || '')
    const [email, setEmail] = useState(existingContact.email || '')

    const updating = Object.entries(existingContact).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault() // prevent the form from refreshing the page
        
        const data = {
            firstName,
            lastName,
            email
        }

        const url = "http://127.0.0.1:5000/" + (updating ? "update_contact/" + existingContact.id : "create_contact")
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const message = await response.json()
            console.log(message.message)
        }
        else {
            updateCallback()
        }
    }

    return (
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={onSubmit}>
            <div className='form-row'>
                <label htmlFor="firstName">First name:</label>
                <input id='firstName' type="text" name="first_name" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className='form-row'>           
                <label htmlFor="lastName">Last name:</label>
                <input id='lastName' type="text" name="last_name" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className='form-row'>
                <label htmlFor="email">Email:</label>
                <input id='email' type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
                <button type="submit">{updating ? "Update" : "Create"}</button>
            </form>
        </div>
    )
}
export default ContactForm


