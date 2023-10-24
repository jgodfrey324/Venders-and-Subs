import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
// import "./SearchPage.css"

export default function EntryDetail () {
    const entryId = useParams()
	const sessionUser = useSelector(state => state.session.user);
    const allEntries = useSelector(state => state.entries);

    console.log(entryId)

    if (!sessionUser) return <Redirect to='/login' />

    return (
        <>Entry Detail Page...</>
    )
}
