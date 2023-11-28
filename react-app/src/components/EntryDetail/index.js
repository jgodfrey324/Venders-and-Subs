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
            {/* <img alt='mountain-view' src='https://imgur.com/zpFRrxY' /> */}

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

                <h3>Category:</h3>
                <div className='categories-house'>
                    <p>{entry.category}</p>
                </div>

                <h3>Sub-categories:</h3>
                <div className='detail-sub-cat-house'>
                    {entry.sub_categories.map(cat => {
                        return (
                            <p key={cat}>{cat}</p>
                        )
                    })}
                </div>

                <h3>Location: </h3>
                <div className='detail-location-house'>
                    <p>{entry.location.city} , {entry.location.state}<span> </span>{entry.location.zip}</p>
                    <p><span>Primary address: </span>{entry.company.address}</p>
                    <p><span>Secondary address: </span>{entry.company.address_2}</p>
                </div>

                <h3>Contact: </h3>
                <div className='detail-contact-house'>
                    <p>{entry.contact.first_name} {entry.contact.last_name}</p>
                    <p><span>Email: </span>{entry.contact.email}</p>
                    <p><span>Primary phone: </span>{entry.contact.phone_number}</p>
                    <p><span>Secondary phone: </span>{entry.contact.cell_number}</p>
                    <p><span>Fax Number: </span>{entry.contact.fax_number}</p>
                </div>

                <h3>Notes:</h3>
                <div className='notes-house'>
                    <p>{entry.notes}</p>
                </div>
            </div>
        </div>
    ) : null

    // return 'entry'
}
