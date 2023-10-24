import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import "./EntryDetail.css"
import { useEffect } from 'react';
import { getOneEntry } from '../../store/entries';

export default function EntryDetail () {
    const entryId = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);
    const entryClicked = useSelector(state => state.entires)

    useEffect(() => {
        dispatch(getOneEntry(entryId.entryId))
    }, [entryId])

    if (!sessionUser) return <Redirect to='/login' />

    return (
        <div className='details-page-house'>
            <div className='entry-detail-house'>
                <h1>{entryClicked.company.company_name}</h1>
            </div>

            <p className='navigation-link' onClick={() => history.goBack()}>Go Back</p>
        </div>
    )
}
