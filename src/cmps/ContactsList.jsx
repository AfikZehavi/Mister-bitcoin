import React from 'react'
import { Link } from 'react-router-dom'
export function ContactsList({ contacts }) {
    return (
        <div className="contacts-list">
            <ul className="list-group list-group-flush">
                {contacts.map(contact => <Link key={contact._id} to={`/contact/${contact._id}`}><li key={contact._id} className="list-group-item p-3 mb-1"><strong>{contact.name}</strong></li></Link>)}
            </ul>
        </div>
    )
}
