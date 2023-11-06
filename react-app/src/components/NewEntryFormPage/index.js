import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// import { getAllEntries } from '../../store/entries';
import "./NewEntryFormPage.css"
import { postEntry } from '../../store/entries';

export default function NewEntryFormPage () {
    // const dispatch = useDispatch()
    const history = useHistory()
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);

    const [company, setCompany] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState([])
    const [contactName, setContactName] = useState('')
    const [primaryPhone, setPrimaryPhone] = useState('')
    const [secondaryPhone, setSecondaryPhone] = useState('')
    const [email, setEmail] = useState('')
    const [faxNumber, setFaxNumber] = useState('')
    const [primaryAddress, setPrimaryAddress] = useState('')
    const [secondaryAddress, setSecondaryAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [note, setNote] = useState('')
    const [errors, setErrors] = useState('')
    const [submitted, setSubmitted] = useState(false);


    if (!sessionUser) return <Redirect to='/login' />


    const submitForm = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        const formData = {
            category,
            company,
            subCategory,
            contactName,
            primaryPhone,
            secondaryPhone,
            email,
            faxNumber,
            primaryAddress,
            secondaryAddress,
            city,
            state,
            zip,
            note
        };


        const data = await dispatch(postEntry(formData));
        // if data is sent back set errors to the data
        if (data.errors) {
            return setErrors(data.errors[0]);
        }

        if (submitted && errors) {
            setErrors('');
        }

        setCompany('')
        setCategory('')
        setSubCategory([])
        setContactName('')
        setPrimaryAddress('')
        setSecondaryAddress('')
        setEmail('')
        setFaxNumber('')
        setPrimaryPhone('')
        setSecondaryPhone('')
        setCity('')
        setState('')
        setZip('')
        setNote('')
        setSubmitted(false)

        history.push('/')
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
                        <input
                            value={company}
                            placeholder='Company name'
                            required
                            onChange={(e) => setCompany(e.target.value)}
                        />

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

                        <fieldset>
                            <legend>Select subcategories:</legend>

                            <div>
                                <input type="checkbox" value="appliances" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="appliances" name="appliances" />
                                <label htmlFor="appliances">Appliances</label>
                            </div>

                            <div>
                                <input type="checkbox" value="asphalt" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="asphalt" name="asphalt" />
                                <label htmlFor="asphalt">Asphalt</label>
                            </div>

                            <div>
                                <input type="checkbox" value="billing" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="billing" name="billing" />
                                <label htmlFor="billing">Billing</label>
                            </div>

                            <div>
                                <input type="checkbox" value="brick" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="brick" name="brick" />
                                <label htmlFor="brick">Brick</label>
                            </div>

                            <div>
                                <input type="checkbox" value="cabinetry" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="cabinetry" name="cabinetry" />
                                <label htmlFor="cabinetry">Cabinetry</label>
                            </div>

                            <div>
                                <input type="checkbox" value="caisson" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="caisson" name="caisson" />
                                <label htmlFor="caisson">Caisson</label>
                            </div>

                            <div>
                                <input type="checkbox" value="carpentry" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="carpentry" name="carpentry" />
                                <label htmlFor="carpentry">Carpentry</label>
                            </div>

                            <div>
                                <input type="checkbox" value="ceilings" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="ceilings" name="ceilings" />
                                <label htmlFor="ceilings">Ceilings</label>
                            </div>

                            <div>
                                <input type="checkbox" value="chinking" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="chinking" name="chinking" />
                                <label htmlFor="chinking">Chinking</label>
                            </div>

                            <div>
                                <input type="checkbox" value="cleaning" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="cleaning" name="cleaning" />
                                <label htmlFor="cleaning">Cleaning</label>
                            </div>

                            <div>
                                <input type="checkbox" value="communication" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="communications" name="communications" />
                                <label htmlFor="communications">Communications</label>
                            </div>

                            <div>
                                <input type="checkbox" value="compaction" onChange={(e) => {
                                   if (subCategory.includes(e.target.value)) {
                                    const removeElement = subCategory
                                    const eleIndex = subCategory.indexOf(e.target.value)

                                    removeElement.splice(eleIndex, 1)
                                    setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="compaction" name="compaction" />
                                <label htmlFor="compaction">Compaction</label>
                            </div>

                            <div>
                                <input type="checkbox" value="composites" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="composites" name="composites" />
                                <label htmlFor="composites">Composites</label>
                            </div>

                            <div>
                                <input type="checkbox" value="concrete" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="concrete" name="concrete" />
                                <label htmlFor="concrete">Concrete</label>
                            </div>

                            <div>
                                <input type="checkbox" value="construction-management" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="construction-management" name="construction-management" />
                                <label htmlFor="construction-management">Construction Management</label>
                            </div>

                            <div>
                                <input type="checkbox" value="consulting" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="consulting" name="consulting" />
                                <label htmlFor="consulting">Consulting</label>
                            </div>

                            <div>
                                <input type="checkbox" value="countertops" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="countertops" name="countertops" />
                                <label htmlFor="countertops">Countertops</label>
                            </div>

                            <div>
                                <input type="checkbox" value="demolition" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="demolition" name="demolition" />
                                <label htmlFor="demolition">Demolition</label>
                            </div>

                            <div>
                                <input type="checkbox" value="design" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="design" name="design" />
                                <label htmlFor="design">Design</label>
                            </div>

                            <div>
                                <input type="checkbox" value="doors" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="doors" name="doors" />
                                <label htmlFor="doors">Doors</label>
                            </div>

                            <div>
                                <input type="checkbox" value="drilling" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="drilling" name="drilling" />
                                <label htmlFor="drilling">Drilling</label>
                            </div>

                            <div>
                                <input type="checkbox" value="earthwork" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="earthwork" name="earthwork" />
                                <label htmlFor="earthwork">Earthwork</label>
                            </div>

                            <div>
                                <input type="checkbox" value="electrical" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="electrical" name="electrical" />
                                <label htmlFor="electrical">Electrical</label>
                            </div>

                            <div>
                                <input type="checkbox" value="elevators" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="elevators" name="elevators" />
                                <label htmlFor="elevators">Elevators</label>
                            </div>

                            <div>
                                <input type="checkbox" value="engineering" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="engineering" name="engineering" />
                                <label htmlFor="engineering">Engineering</label>
                            </div>

                            <div>
                                <input type="checkbox" value="equipment" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="equipment" name="equipment" />
                                <label htmlFor="equipment">Equipment</label>
                            </div>

                            <div>
                                <input type="checkbox" value="erosion-control" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="erosion-control" name="erosion-control" />
                                <label htmlFor="erosion-control">Erosion Control</label>
                            </div>

                            <div>
                                <input type="checkbox" value="estimation" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="estimation" name="estimation" />
                                <label htmlFor="estimation">Estimation</label>
                            </div>

                            <div>
                                <input type="checkbox" value="excavation" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="excavation" name="excavation" />
                                <label htmlFor="excavation">Excavation</label>
                            </div>

                            <div>
                                <input type="checkbox" value="fabrication" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="fabrication" name="fabrication" />
                                <label htmlFor="fabrication">Fabrication</label>
                            </div>

                            <div>
                                <input type="checkbox" value="fascial" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="fascial" name="fascial" />
                                <label htmlFor="fascial">Fascial</label>
                            </div>

                            <div>
                                <input type="checkbox" value="fencing" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="fencing" name="fencing" />
                                <label htmlFor="fencing">Fencing</label>
                            </div>

                            <div>
                                <input type="checkbox" value="fire-protection" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="fire-protection" name="fire-protection" />
                                <label htmlFor="fire-protection">Fire Protection</label>
                            </div>

                            <div>
                                <input type="checkbox" value="flooring" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="flooring" name="flooring" />
                                <label htmlFor="flooring">Flooring</label>
                            </div>

                            <div>
                                <input type="checkbox" value="foundations" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="foundations" name="foundations" />
                                <label htmlFor="foundations">Foundations</label>
                            </div>

                            <div>
                                <input type="checkbox" value="framing" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="framing" name="framing" />
                                <label htmlFor="framing">Framing</label>
                            </div>

                            <div>
                                <input type="checkbox" value="garbage" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="garbage" name="garbage" />
                                <label htmlFor="garbage">Garbage</label>
                            </div>

                            <div>
                                <input type="checkbox" value="glass" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="glass" name="glass" />
                                <label htmlFor="glass">Glass</label>
                            </div>

                            <div>
                                <input type="checkbox" value="granite" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="granite" name="granite" />
                                <label htmlFor="granite">Granite</label>
                            </div>

                            <div>
                                <input type="checkbox" value="gravel" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="gravel" name="gravel" />
                                <label htmlFor="gravel">Gravel</label>
                            </div>

                            <div>
                                <input type="checkbox" value="gutters" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="gutters" name="gutters" />
                                <label htmlFor="gutters">Gutters</label>
                            </div>

                            <div>
                                <input type="checkbox" value="hardware" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="hardware" name="hardware" />
                                <label htmlFor="hardware">Hardware</label>
                            </div>

                            <div>
                                <input type="checkbox" value="hvac" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="hvac" name="hvac" />
                                <label htmlFor="hvac">HVAC</label>
                            </div>

                            <div>
                                <input type="checkbox" value="insulating" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="insulating" name="insulating" />
                                <label htmlFor="insulating">Insulating</label>
                            </div>

                            <div>
                                <input type="checkbox" value="interior-plasters" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="interior-plaster" name="interior-plaster" />
                                <label htmlFor="interior-plaster">Interior Plaster</label>
                            </div>

                            <div>
                                <input type="checkbox" value="irrigation" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="irrigation" name="irrigation" />
                                <label htmlFor="irrigation">Irrigation</label>
                            </div>

                            <div>
                                <input type="checkbox" value="ladders" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="ladders" name="ladders" />
                                <label htmlFor="ladders">Ladders</label>
                            </div>

                            <div>
                                <input type="checkbox" value="landscaping" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="landscaping" name="landscaping" />
                                <label htmlFor="landscaping">Landscaping</label>
                            </div>

                            <div>
                                <input type="checkbox" value="lumber" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="lumber" name="lumber" />
                                <label htmlFor="lumber">Lumber</label>
                            </div>

                            <div>
                                <input type="checkbox" value="maintenance" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="maintenance" name="maintenance" />
                                <label htmlFor="maintenance">Maintenance</label>
                            </div>

                            <div>
                                <input type="checkbox" value="marble" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="marble" name="marble" />
                                <label htmlFor="marble">Marble</label>
                            </div>

                            <div>
                                <input type="checkbox" value="masonry" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="masonry" name="masonry" />
                                <label htmlFor="masonry">Masonry</label>
                            </div>

                            <div>
                                <input type="checkbox" value="metal" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="metal" name="metal" />
                                <label htmlFor="metal">Metal</label>
                            </div>

                            <div>
                                <input type="checkbox" value="millwork" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="millwork" name="millwork" />
                                <label htmlFor="millwork">Millwork</label>
                            </div>

                            <div>
                                <input type="checkbox" value="moving" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="moving" name="moving" />
                                <label htmlFor="moving">Moving</label>
                            </div>

                            <div>
                                <input type="checkbox" value="painting" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="painting" name="painting" />
                                <label htmlFor="painting">Painting</label>
                            </div>

                            <div>
                                <input type="checkbox" value="parrapet" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="parrapet" name="parrapet" />
                                <label htmlFor="parrapet">Parrapet</label>
                            </div>

                            <div>
                                <input type="checkbox" value="piers" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="piers" name="piers" />
                                <label htmlFor="piers">Piers</label>
                            </div>

                            <div>
                                <input type="checkbox" value="piles" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="piles" name="piles" />
                                <label htmlFor="piles">Piles</label>
                            </div>

                            <div>
                                <input type="checkbox" value="plastics" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="plastics" name="plastics" />
                                <label htmlFor="plastics">Plastics</label>
                            </div>

                            <div>
                                <input type="checkbox" value="plumbing" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="plumbing" name="plumbing" />
                                <label htmlFor="plumbing">Plumbing</label>
                            </div>

                            <div>
                                <input type="checkbox" value="proofing" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="proofing" name="proofing" />
                                <label htmlFor="proofing">Proofing</label>
                            </div>

                            <div>
                                <input type="checkbox" value="propane" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="propane" name="propane" />
                                <label htmlFor="propane">Propane</label>
                            </div>

                            <div>
                                <input type="checkbox" value="quality-control" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="quality-control" name="quality-control" />
                                <label htmlFor="quality-control">Quality Control</label>
                            </div>

                            <div>
                                <input type="checkbox" value="quartz" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="quartz" name="quartz" />
                                <label htmlFor="quartz">Quartz</label>
                            </div>

                            <div>
                                <input type="checkbox" value="remodeling" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="remodeling" name="remodeling" />
                                <label htmlFor="remodeling">Remodeling</label>
                            </div>

                            <div>
                                <input type="checkbox" value="rentals" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="rentals" name="rentals" />
                                <label htmlFor="rentals">Rentals</label>
                            </div>

                            <div>
                                <input type="checkbox" value="rock" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="rock" name="rock" />
                                <label htmlFor="rock">Rock</label>
                            </div>

                            <div>
                                <input type="checkbox" value="roofing" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="roofing" name="roofing" />
                                <label htmlFor="roofing">Roofing</label>
                            </div>

                            <div>
                                <input type="checkbox" value="safety" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="safety" name="safety" />
                                <label htmlFor="safety">Safety</label>
                            </div>

                            <div>
                                <input type="checkbox" value="scaffolding" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="scaffolding" name="scaffolding" />
                                <label htmlFor="scaffolding">Scaffolding</label>
                            </div>

                            <div>
                                <input type="checkbox" value="security" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="security" name="security" />
                                <label htmlFor="security">Security</label>
                            </div>

                            <div>
                                <input type="checkbox" value="spetic-services" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="septic-services" name="septic-services" />
                                <label htmlFor="septic-services">Septic Services</label>
                            </div>

                            <div>
                                <input type="checkbox" value="showers" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="showers" name="showers" />
                                <label htmlFor="showers">Showers</label>
                            </div>

                            <div>
                                <input type="checkbox" value="siding" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="siding" name="siding" />
                                <label htmlFor="siding">Siding</label>
                            </div>

                            <div>
                                <input type="checkbox" value="soffit" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="soffit" name="soffit" />
                                <label htmlFor="soffit">Soffit</label>
                            </div>

                            <div>
                                <input type="checkbox" value="specialties" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="specialties" name="specialties" />
                                <label htmlFor="specialties">Specialties</label>
                            </div>

                            <div>
                                <input type="checkbox" value="specs-reproduction" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="specs-reproduction" name="specs-reproduction" />
                                <label htmlFor="specs-reproduction">Specs Reproduction</label>
                            </div>

                            <div>
                                <input type="checkbox" value="stabilization" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="stabilization" name="stabilization" />
                                <label htmlFor="stabilization">Stabilization</label>
                            </div>

                            <div>
                                <input type="checkbox" value="staffing" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="staffing" name="staffing" />
                                <label htmlFor="staffing">Staffing</label>
                            </div>

                            <div>
                                <input type="checkbox" value="stairs" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="stairs" name="stairs" />
                                <label htmlFor="stairs">Stairs</label>
                            </div>

                            <div>
                                <input type="checkbox" value="steel" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="steel" name="steel" />
                                <label htmlFor="steel">Steel</label>
                            </div>

                            <div>
                                <input type="checkbox" value="stone" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="stone" name="stone" />
                                <label htmlFor="stone">Stone</label>
                            </div>

                            <div>
                                <input type="checkbox" value="storage" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="storage" name="storage" />
                                <label htmlFor="storage">Storage</label>
                            </div>

                            <div>
                                <input type="checkbox" value="stormwater" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="stormwater" name="stormwater" />
                                <label htmlFor="stormwater">Stormwater</label>
                            </div>

                            <div>
                                <input type="checkbox" value="stucco" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="stucco" name="stucco" />
                                <label htmlFor="stucco">Stucco</label>
                            </div>

                            <div>
                                <input type="checkbox" value="surveying" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="surveying" name="surveying" />
                                <label htmlFor="surveying">Surveying</label>
                            </div>

                            <div>
                                <input type="checkbox" value="tile" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="tile" name="tile" />
                                <label htmlFor="tile">Tile</label>
                            </div>

                            <div>
                                <input type="checkbox" value="traffic-control" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="traffic-control" name="traffic-control" />
                                <label htmlFor="traffic-control">Traffic Control</label>
                            </div>

                            <div>
                                <input type="checkbox" value="trench" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="trench" name="trench" />
                                <label htmlFor="trench">Trench</label>
                            </div>

                            <div>
                                <input type="checkbox" value="trim" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="trim" name="trim" />
                                <label htmlFor="trim">Trim</label>
                            </div>

                            <div>
                                <input type="checkbox" value="trucking" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="trucking" name="trucking" />
                                <label htmlFor="trucking">Trucking</label>
                            </div>

                            <div>
                                <input type="checkbox" value="trusses" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="trusses" name="trusses" />
                                <label htmlFor="trusses">Trusses</label>
                            </div>

                            <div>
                                <input type="checkbox" value="utilities" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="utilities" name="utilities" />
                                <label htmlFor="utilities">Utilities</label>
                            </div>

                            <div>
                                <input type="checkbox" value="walls" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="walls" name="walls" />
                                <label htmlFor="walls">Walls</label>
                            </div>

                            <div>
                                <input type="checkbox" value="water-treatment-systems" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="water-treatment" name="water-treatment" />
                                <label htmlFor="water-treatment">Water Treatment Systems</label>
                            </div>

                            <div>
                                <input type="checkbox" value="welding" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="welding" name="welding" />
                                <label htmlFor="welding">Welding</label>
                            </div>

                            <div>
                                <input type="checkbox" value="windows" onChange={(e) => {
                                    if (subCategory.includes(e.target.value)) {
                                        const removeElement = subCategory
                                        const eleIndex = subCategory.indexOf(e.target.value)

                                        removeElement.splice(eleIndex, 1)
                                        setSubCategory([...removeElement])
                                    } else {
                                        setSubCategory([...subCategory, e.target.value])
                                    }

                                }} id="windows" name="windows" />
                                <label htmlFor="windows">Windows</label>
                            </div>
                        </fieldset>

                        <div>
                            <p>*Format phone numbers: xxx-xxx-xxx</p>
                        </div>

                        <div>
                            <p>Contact:</p>
                            <input
                            value={contactName}
                            placeholder='First and last name'
                            required
                            onChange={(e) => setContactName(e.target.value)}
                            />

                            <input
                            value={primaryPhone}
                            placeholder='Primary phone'
                            required
                            onChange={(e) => setPrimaryPhone(e.target.value)}
                            />

                            <input
                            value={secondaryPhone}
                            placeholder='Secondary phone'
                            onChange={(e) => setSecondaryPhone(e.target.value)}
                            />

                            <input
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                            value={faxNumber}
                            placeholder='Fax number'
                            onChange={(e) => setFaxNumber(e.target.value)}
                            />
                        </div>

                        <div>
                            <p>Location:</p>
                            <input
                            value={primaryAddress}
                            placeholder='Primary address'
                            onChange={(e) => setPrimaryAddress(e.target.value)}
                            />

                            <input
                            value={secondaryAddress}
                            placeholder='Secondary address'
                            onChange={(e) => setSecondaryAddress(e.target.value)}
                            />

                            <input
                            value={city}
                            placeholder='City'
                            onChange={(e) => setCity(e.target.value)}
                            />
                            ,
                            <input
                            value={state}
                            placeholder='State'
                            onChange={(e) => setState(e.target.value)}
                            />

                            <input
                            value={zip}
                            placeholder='Zip code'
                            onChange={(e) => setZip(e.target.value)}
                            />
                        </div>

                        <div>
                            <textarea
                            value={note}
                            placeholder='Additional information...'
                            onChange={(e) => setNote(e.target.value)}
                            />
                        </div>

                        <button>Add entry</button>
                    </div>
            </form >
        </div>
    )
}
