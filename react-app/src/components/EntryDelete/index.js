import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { deleteEntry } from '../../store/entries';
// import "./SearchPage.css"

export default function EntryDelete () {
    const urlParam = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);

    const entryId = parseInt(urlParam['entryId'])

    if (!sessionUser) return <Redirect to='/login' />

    return (
        <div className='entry-update-house'>
            <p>Do you wish to delete this entry?</p>
            <button onClick={() => {
                dispatch(deleteEntry(entryId))
                history.push('/')
            }}>Yes, delete</button>
            <button onClick={() => history.goBack()}>No, go back</button>
        </div>
    )
}
