import { Component } from 'react'
import { contactService } from '../services/contactService'
import { saveContact, loadContacts } from '../store/actions/contactActions'
import { connect } from 'react-redux'

class _EditContact extends Component {

    state = {
        contact: null
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        // await contactService.saveContact({ ...this.state.contact })
        console.log(this.state.contact);
        this.props.saveContact(this.state.contact)
        this.props.loadContacts()
        this.props.history.push('/contacts')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))

    }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
        this.setState({ contact })
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className="">
                <form onSubmit={this.onSaveContact}>
                    <div className="contact-edit form-group p-3 d-flex flex-column">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id='name' onChange={this.handleChange} value={contact.name} name='name' className='form-control' />
                        <label htmlFor="email">Email: </label>
                        <input type="email" id='email' onChange={this.handleChange} value={contact.email} name='email' className='form-control' />
                        <label htmlFor="phone">Phone: </label>
                        <input type="tel" id='phone' name='phone' onChange={this.handleChange} value={contact.phone} className='form-control' />

                        <button className='clean-btn submit-btn'>DONE</button>
                    </div>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contactModule.contacts
    }
}

const mapDispatchToProps = {
    saveContact,
    loadContacts
}

export const EditContact = connect(mapStateToProps, mapDispatchToProps)(_EditContact)