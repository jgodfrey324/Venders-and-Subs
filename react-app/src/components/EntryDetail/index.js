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
            <div className='entry-detail-house'>
                <h1>{selectedEntry.company.company_name}</h1>
            </div>

            <p className='navigation-link' onClick={() => history.goBack()}>Go Back</p>
        </div>
    ) : null
}
