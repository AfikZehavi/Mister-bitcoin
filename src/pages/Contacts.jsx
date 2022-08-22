import { Component } from 'react'
import { ContactsList } from '../cmps/ContactsList';
import { Link } from 'react-router-dom';

export class Contacts extends Component {

    render() {
        let { contacts } = this.props
        if (!contacts) return <div>Loading...</div>
        const handleOnInput = (e) => {
            const query = e.target.value

            this.props.onSearch(query)
        }
        return (
            <div className='p-3'>
                <div className="search-container flex  m-2">
                    <input type="search" onInput={handleOnInput} className='form-control srch-input' placeholder='Search' />

                    <Link className='align-self-center' to="/contact/edit">
                        <span className="add-contact d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg></span>
                    </Link>
                </div>

                <ContactsList contacts={contacts} />
            </div>
        )
    }
}
