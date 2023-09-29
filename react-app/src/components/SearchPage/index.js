import { useSelector } from 'react-redux';
import { Redirect} from 'react-router-dom';
import "./SearchPage.css"

export default function SearchPage () {
	const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return <Redirect to='/login' />

    return (
        sessionUser ? <h1>Search boxes...</h1> : <></>
    )
}
