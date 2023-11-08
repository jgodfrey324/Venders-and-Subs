import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getOneEntry } from '../../store/entries';
import NewEntryFormPage from '../NewEntryFormPage';
// import "./SearchPage.css"

export default function EntryUpdate () {
    const urlParam = useParams()
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);
    const entryToUpdate = useSelector(state => state.entries);

    const entryId = parseInt(urlParam['entryId'])

    useEffect(() => {
        dispatch(getOneEntry(entryId))
    }, [entryId])

    if (!sessionUser) return <Redirect to='/login' />

    return entryToUpdate.user ? (
        <NewEntryFormPage entry={entryToUpdate} entryId={entryId} />
    ) : null
}
