import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import "./EntryDetail.css"
import { useEffect } from 'react';
import { getOneEntry } from '../../store/entries';

export default function EntryDetail () {
    const urlParam = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);
    const entry = useSelector(state => state.entries)

    console.log('entry from store --> ', entry)

    const entryId = parseInt(urlParam['entryId'])
    // const selectedEntry = entries ? entries[entryId] : null

    useEffect(() => {
        dispatch(getOneEntry(entryId))
    }, [entryId])

    if (!sessionUser) return <Redirect to='/login' />


    return entry.user ? (
        <div className='details-page-house'>
            <button className='go-back-button' onClick={() => history.goBack()}>Go Back</button>

            <div className='entry-detail-house'>
                <div className='entry-detail-buttons'>
                    <div className='entry-house-buttons'>
                        <button className='update-delete-button' onClick={() => history.push(`/entries/${entryId}/update`)}>Update</button>
                        <button className='update-delete-button' onClick={() => history.push(`/entries/${entryId}/delete`)}>Delete</button>
                    </div>
                </div>
                <p id='created-by-tag'>Entry created by {entry.user.first_name}</p>
                <h1>{entry.company.company_name}</h1>
                <div className='categories-house'>
                    <h3>Category:</h3>
                    <p>{entry.category}</p>
                </div>
                <div className='sub-cat-house'>
                    <h3>Sub-categories:</h3>
                    {entry.sub_categories.map(cat => {
                        return (
                            <p key={cat}>{cat}</p>
                        )
                    })}
                </div>

                <h3>Location: </h3>
                <p>{entry.location.city}, {entry.location.state} {entry.location.zip}</p>
                <p><span>Primary address: </span>{entry.company.address}</p>
                <p><span>Secondary address: </span>{entry.company.address_2}</p>

                <h3>Contact: </h3>
                <p>{entry.contact.first_name} {entry.contact.last_name}</p>
                <p>Email: {entry.contact.email}</p>
                <p><span>Primary phone: </span>{entry.contact.phone_number}</p>
                <p><span>Secondary phone: </span>{entry.contact.cell_number}</p>
                <p><span>Fax Number: </span>{entry.contact.fax_number}</p>

                <h3>Notes:</h3>
                <p>{entry.notes}</p>
            </div>
        </div>
    ) : null

    // return 'entry'
}
