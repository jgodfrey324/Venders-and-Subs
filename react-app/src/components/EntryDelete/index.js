import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getAllEntries } from '../../store/entries';
// import "./SearchPage.css"

export default function EntryDelete () {
    const urlParam = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
    const searchResults = Object.values(useSelector(state => state.entries));

    const entryId = parseInt(urlParam['entryId'])

    useEffect(() => {
        dispatch(getAllEntries())
    }, [])

    if (!sessionUser) return <Redirect to='/login' />

    return (
        <div className='entry-update-house'>
            <button onClick={() => history.goBack()}>Go back</button>
            {`This is where entry ${entryId} will be deleted`}
        </div>
    )
}
