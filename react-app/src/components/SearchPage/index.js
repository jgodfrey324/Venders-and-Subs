import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { getAllEntries } from '../../store/entries';
import "./SearchPage.css"

export default function SearchPage () {
    const dispatch = useDispatch()
    const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
    const searchResults = Object.values(useSelector(state => state.entries));

    useEffect(() => {
        dispatch(getAllEntries())
    }, [])

    if (!sessionUser) return <Redirect to='/login' />

    return (
        <div className='search-res-house'>
            <button onClick={() => history.push('/entries/new')}>Make new entry</button>
            {searchResults.map(item => {
                return (
                    <div key={item.id} className='entry-house'  onClick={() => history.push(`/entries/${item.id}`)}>
                        <h2>{item.company.company_name}</h2>
                        <p><span>{item.location.city}</span>, <span>{item.location.state}</span> <span>{item.location.zip}</span></p>
                        <h3>Contact: </h3>
                        <p><span>{item.contact.first_name} {item.contact.last_name}</span> --- <span>{item.contact.phone_number}</span></p>
                        <p>Notes: {item.notes}</p>
                    </div>
                )
            })}
        </div>
    )
}
