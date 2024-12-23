import React from 'react'
import PropTypes from 'prop-types'
const ContactList = ({ contacts, updateContact, updateCallback }) => {
    const onDelete = async (id) => {        
        try {
            const options = {
                method: "DELETE",
            }

            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options)
            if (response.status !== 200) {
                const message = await response.json()
                console.log(message.message)
            }
            else {
                updateCallback()
            }
        } catch (error) {
            console.log(error)
        }
        }

    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button className='edit' onClick={() => updateContact(contact)}>Edit</button>
                                <button className='delete' onClick={() => onDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ContactList