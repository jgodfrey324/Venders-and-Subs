import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// import { getAllEntries } from '../../store/entries';
// import "./SearchPage.css"

export default function NewEntryFormPage () {
    // const dispatch = useDispatch()
    const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
    // const searchResults = Object.values(useSelector(state => state.entries));

    if (!sessionUser) return <Redirect to='/login' />


    return (
        <div className='new-entry-form-house'>
            <button onClick={() => history.goBack()}>Go back</button>
            <p>This is where you make a new entry...</p>
        </div>
    )
}
