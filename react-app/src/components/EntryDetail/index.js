import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import "./EntryDetail.css"
import { useEffect } from 'react';
import { getAllEntries } from '../../store/entries';

export default function EntryDetail () {
    const urlParam = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);
    const entries = useSelector(state => state.entries)

    const entryId = parseInt(urlParam['entryId'])
    const selectedEntry = entries ? entries[entryId] : null

    useEffect(() => {
        dispatch(getAllEntries())
    }, [])

    if (!sessionUser) return <Redirect to='/login' />

    return selectedEntry ? (
        <div className='details-page-house'>
            <button onClick={() => history.goBack()}>Go Back</button>

            <div className='entry-detail-house'>
                <p id='created-by-tag'>Entry created by {selectedEntry.user.first_name}</p>
                <h1>{selectedEntry.company.company_name}</h1>

                <h3>Location: </h3>
                <p>{selectedEntry.location.city}, {selectedEntry.location.state} {selectedEntry.location.zip}</p>
                <p><span>Primary address: </span>{selectedEntry.company.address}</p>
                <p><span>Secondary address: </span>{selectedEntry.company.address_2}</p>

                <h3>Contact: </h3>
                <p>{selectedEntry.contact.first_name} {selectedEntry.contact.last_name}</p>
                <p>{selectedEntry.contact.email}</p>
                <p><span>Primary phone: </span>{selectedEntry.contact.phone_number}</p>
                <p><span>Secondary phone: </span>{selectedEntry.contact.cell_number}</p>
                <p><span>Fax Number: </span>{selectedEntry.contact.fax_number}</p>

                <h3>Notes:</h3>
                <p>{selectedEntry.notes}</p>
            </div>
        </div>
    ) : null
}
