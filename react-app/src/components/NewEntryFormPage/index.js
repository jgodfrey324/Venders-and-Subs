import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// import { getAllEntries } from '../../store/entries';
// import "./SearchPage.css"

export default function NewEntryForm () {
    // const dispatch = useDispatch()
    const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
    // const searchResults = Object.values(useSelector(state => state.entries));

    if (!sessionUser) return <Redirect to='/login' />

    return (
        <div className='new-entry-form-house'>
            <p>This is where you make a new entry...</p>
            <button onClick={() => history.goBack()}>Go back</button>
        </div>
    )
}
