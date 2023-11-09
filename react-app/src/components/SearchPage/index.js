import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { getSearchResults } from '../../store/search';
import "./SearchPage.css"

export default function SearchPage () {
    const dispatch = useDispatch()
    const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
    const searchResults = Object.values(useSelector(state => state.searchResults));
    const [category, setCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [contactName, setContactName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        dispatch(getSearchResults())
    }, [])

    const submitForm = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        const formData = {
            category,
            subCategories,
            contactName,
            companyName
        };

        setCategory('')
        setSubCategories([])
        setContactName('')
        setCompanyName('')
        setSubmitted(false)
    }

    if (!sessionUser) return <Redirect to='/login' />

    return (

        <div className='search-res-house'>
            <button onClick={() => history.push('/entries/new')}>Make new entry</button>
            <form onSubmit={submitForm}>
                <div className='new-entry-form'>
                    <select
                        value={category}
                        required
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select a category</option>
                        <option value="Concrete">Concrete</option>
                        <option value="Conveying Systems">Conveying Systems</option>
                        <option value="Doors & Windows">Doors & Windows</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Equipment">Equipment</option>
                        <option value="Finishes">Finishes</option>
                        <option value="Furnishings">Furnishings</option>
                        <option value="General Conditions">General Conditions</option>
                        <option value="Masonry">Masonry</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Site Construction">Site Construction</option>
                        <option value="Specialties">Specialties</option>
                        <option value="Special Construction">Special Construction</option>
                        <option value="Steel">Steel</option>
                        <option value="Thermal & Moisture Protection">Thermal & Moisture Protection</option>
                        <option value="Wood & Plastics">Wood & Plastics</option>
                    </select>

                </div>
            </form>
            {searchResults.length ? (
                <>
                    {searchResults.map(item => {
                        return (
                            <div key={item.id} className='entry-house'>
                                <div className='entry-house-buttons'>
                                    <button onClick={() => history.push(`/entries/${item.id}/update`)}>Update</button>
                                    <button onClick={() => history.push(`/entries/${item.id}/delete`)}>Delete</button>
                                </div>
                                <div className='entry-house-details' onClick={() => history.push(`/entries/${item.id}`)}>
                                    <h2>{item.company.company_name}</h2>
                                    <p><span>{item.location.city}</span>, <span>{item.location.state}</span> <span>{item.location.zip}</span></p>
                                    <h3>Contact: </h3>
                                    <p><span>{item.contact.first_name} {item.contact.last_name}</span> --- <span>{item.contact.phone_number}</span></p>
                                    <h3>Notes: </h3>
                                    <p>{item.notes}</p>
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : 'No Results'}
        </div>
    )
}
