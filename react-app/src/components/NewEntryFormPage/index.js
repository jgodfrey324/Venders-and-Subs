import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// import { getAllEntries } from '../../store/entries';
// import "./SearchPage.css"

export default function NewEntryFormPage () {
    // const dispatch = useDispatch()
    const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
    const [submitted, setSubmitted] = useState(false);

    if (!sessionUser) return <Redirect to='/login' />


    const submitForm = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        const formData = new FormData();
        // formData.append("text", text);

        // const data = await dispatch(createPost(formData));
        // if data is sent back set errors to the data
        // if (data.errors) {
        //     return setErrors(data.errors[0]);
        // }

        // if (submitted && errors) {
        //     setErrors('');
        // }
        // setText('')
        setSubmitted(false)
    }


    return (
        <div className='new-entry-form-house'>
            <button onClick={() => history.goBack()}>Go back</button>
            <form onSubmit={submitForm} encType="multipart/form-data">
                    <div className='new-entry-form'>
                        {/* <ul>
                            {errors && (
                                <p style={{ color: "red" }}>{errors}</p>
                            )}
                        </ul> */}
                        {/* {
                            company (id if associated already) - required
                            category (id) - required
                            subcategories (id's)
                            contact first_name - required last_name - required
                            contact email
                            primary_phone - required
                            secondary_phone
                            fax_number
                            city, state zip
                            notes on entry
                        } */}
                        <button>Add entry</button>
                    </div>
            </form >
        </div>
    )
}
