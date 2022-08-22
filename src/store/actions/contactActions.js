import { contactService } from '../../services/contactService'

export function loadContacts() {

    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().contactModule
            const contacts = await contactService.getContacts(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
        } catch (err) {
            console.log('err = ', err)
        }
    }
}

export function setFilterBy(filterBy) {

    console.log('filterbysubmit');
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}

export function saveContact(contact) {
    return async () => {
        try {
            await contactService.saveContact(contact)
            loadContacts()
        } catch (err) {
            console.log('err:', err);
        }
    }
}

export function deleteContact(id) {

    return async () => {
        try {
            await contactService.deleteContact(id)
            loadContacts()
        } catch (err) {
            console.log('err', err);
        }
    }

}