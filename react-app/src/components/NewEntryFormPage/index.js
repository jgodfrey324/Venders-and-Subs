import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// import { getAllEntries } from '../../store/entries';
import "./NewEntryFormPage.css"
import { postEntry, updateEntry } from '../../store/entries';

export default function NewEntryFormPage ({ entry, entryId }) {
    // const dispatch = useDispatch()
    const history = useHistory()
    const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);

    const [company, setCompany] = useState(entry ? entry.company.company_name : '')
    const [category, setCategory] = useState(entry ? entry.category : '')
    const [subCategory, setSubCategory] = useState(entry ? entry.sub_categories : [])
    const [contactName, setContactName] = useState(entry ? `${entry.contact.first_name} ${entry.contact.last_name}` : '')
    const [primaryPhone, setPrimaryPhone] = useState(entry ? entry.contact.phone_number : '')
    const [secondaryPhone, setSecondaryPhone] = useState(entry ? entry.contact.cell_number : '')
    const [email, setEmail] = useState(entry ? entry.contact.email : '')
    const [faxNumber, setFaxNumber] = useState(entry ? entry.contact.fax_number : '')
    const [primaryAddress, setPrimaryAddress] = useState(entry ? entry.company.address : '')
    const [secondaryAddress, setSecondaryAddress] = useState(entry ? entry.company.address_2 : '')
    const [city, setCity] = useState(entry ? entry.location.city : '')
    const [state, setState] = useState(entry ? entry.location.state : '')
    const [zip, setZip] = useState(entry ? entry.location.zip : '')
    const [note, setNote] = useState(entry ? entry.notes : '')
    const [errors, setErrors] = useState('')
    const [submitted, setSubmitted] = useState(false);
    const [menu, setMenu] = useState(true)


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


        let data = null;
        if (entry) {
            data = await dispatch(updateEntry(formData, entryId));
        } else {
            data = await dispatch(postEntry(formData));
        }
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
            <button className='go-back-button' onClick={() => history.goBack()}>Go back</button>
            <h3>Create a new entry:</h3>
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
                            <option id='select-value' value="">Select a category</option>
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

                        <div className='sub-cat-house'>
                            <div className='sub-cat-selection-box' onClick={() => setMenu(!menu)}>
                                <span id='sub-cat-text'>Select sub-categories:</span> <span id='caret'>{ menu ? '⌄' :  '^' }</span>
                            </div>
                            {!menu ? (
                                <fieldset>
                                <div>
                                    <input checked={subCategory.includes("Appliances") ? true : false} type="checkbox" value="Appliances" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Asphalt") ? true : false} type="checkbox" value="Asphalt" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Billing") ? true : false} type="checkbox" value="Billing" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Brick") ? true : false} type="checkbox" value="Brick" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Cabinetry") ? true : false} type="checkbox" value="Cabinetry" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Caisson") ? true : false} type="checkbox" value="Caisson" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Carpentry") ? true : false} type="checkbox" value="Carpentry" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Ceilings") ? true : false} type="checkbox" value="Ceilings" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Chinking") ? true : false} type="checkbox" value="Chinking" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Cleaning") ? true : false} type="checkbox" value="Cleaning" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Communication") ? true : false} type="checkbox" value="Communication" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Compaction") ? true : false} type="checkbox" value="Compaction" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Composites") ? true : false} type="checkbox" value="Composites" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Concrete") ? true : false} type="checkbox" value="Concrete" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Construction Management") ? true : false} type="checkbox" value="Construction Management" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Consulting") ? true : false} type="checkbox" value="Consulting" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Countertops") ? true : false} type="checkbox" value="Countertops" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Demolition") ? true : false} type="checkbox" value="Demolition" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Design") ? true : false} type="checkbox" value="Design" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Doors") ? true : false} type="checkbox" value="Doors" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Drilling") ? true : false} type="checkbox" value="Drilling" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Earthwork") ? true : false} type="checkbox" value="Earthwork" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Electrical") ? true : false} type="checkbox" value="Electrical" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Elevators") ? true : false} type="checkbox" value="Elevators" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Engineering") ? true : false} type="checkbox" value="Engineering" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Equipment") ? true : false} type="checkbox" value="Equipment" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Erosion Control") ? true : false} type="checkbox" value="Erosion-control" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Estimation") ? true : false} type="checkbox" value="Estimation" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Excavation") ? true : false} type="checkbox" value="Excavation" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Fabrication") ? true : false} type="checkbox" value="Fabrication" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Fascial") ? true : false} type="checkbox" value="Fascial" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Fencing") ? true : false} type="checkbox" value="Fencing" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Fire Protection") ? true : false} type="checkbox" value="Fire Protection" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Flooring") ? true : false} type="checkbox" value="Flooring" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Foundations") ? true : false} type="checkbox" value="Foundations" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Framing") ? true : false} type="checkbox" value="Framing" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Garbage") ? true : false} type="checkbox" value="Garbage" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Glass") ? true : false} type="checkbox" value="Glass" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Granite") ? true : false} type="checkbox" value="Granite" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Gravel") ? true : false} type="checkbox" value="Gravel" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Gutters") ? true : false} type="checkbox" value="Gutters" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Hardware") ? true : false} type="checkbox" value="Hardware" onChange={(e) => {
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
                                    <input checked={subCategory.includes("HVAC") ? true : false} type="checkbox" value="HVAC" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Insulating") ? true : false} type="checkbox" value="Insulating" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Interior Plasters") ? true : false} type="checkbox" value="Interior Plasters" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Irrigation") ? true : false} type="checkbox" value="Irrigation" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Ladders") ? true : false} type="checkbox" value="Ladders" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Landscaping") ? true : false} type="checkbox" value="Landscaping" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Lumber") ? true : false} type="checkbox" value="Lumber" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Maintenance") ? true : false} type="checkbox" value="Maintenance" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Marble") ? true : false} type="checkbox" value="Marble" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Masonry") ? true : false} type="checkbox" value="Masonry" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Metal") ? true : false} type="checkbox" value="Metal" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Millwork") ? true : false} type="checkbox" value="Millwork" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Moving") ? true : false} type="checkbox" value="Moving" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Painting") ? true : false} type="checkbox" value="Painting" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Parrapet") ? true : false} type="checkbox" value="Parrapet" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Piers") ? true : false} type="checkbox" value="Piers" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Piles") ? true : false} type="checkbox" value="Piles" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Plastics") ? true : false} type="checkbox" value="Plastics" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Plumbing") ? true : false} type="checkbox" value="Plumbing" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Proofing") ? true : false} type="checkbox" value="Proofing" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Propane") ? true : false} type="checkbox" value="Propane" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Quality Control") ? true : false} type="checkbox" value="Quality Control" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Quartz") ? true : false} type="checkbox" value="Quartz" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Remodeling") ? true : false} type="checkbox" value="Remodeling" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Rentals") ? true : false} type="checkbox" value="Rentals" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Rock") ? true : false} type="checkbox" value="Rock" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Roofing") ? true : false} type="checkbox" value="Roofing" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Safety") ? true : false} type="checkbox" value="Safety" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Scaffolding") ? true : false} type="checkbox" value="Scaffolding" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Security") ? true : false} type="checkbox" value="Security" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Septic Services") ? true : false} type="checkbox" value="Septic Services" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Showers") ? true : false} type="checkbox" value="Showers" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Siding") ? true : false} type="checkbox" value="Siding" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Soffit") ? true : false} type="checkbox" value="Soffit" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Specialties") ? true : false} type="checkbox" value="Specialties" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Specs Reproduction") ? true : false} type="checkbox" value="Specs Reproduction" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Stabilization") ? true : false} type="checkbox" value="Stabilization" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Staffing") ? true : false} type="checkbox" value="Staffing" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Stairs") ? true : false} type="checkbox" value="Stairs" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Steel") ? true : false} type="checkbox" value="Steel" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Stone") ? true : false} type="checkbox" value="Stone" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Storage") ? true : false} type="checkbox" value="Storage" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Stormwater") ? true : false} type="checkbox" value="Stormwater" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Stucco") ? true : false} type="checkbox" value="Stucco" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Surveying") ? true : false} type="checkbox" value="Surveying" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Tile") ? true : false} type="checkbox" value="Tile" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Traffic Control") ? true : false} type="checkbox" value="Traffic Control" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Trench") ? true : false} type="checkbox" value="Trench" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Trim") ? true : false} type="checkbox" value="Trim" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Trucking") ? true : false} type="checkbox" value="Trucking" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Trusses") ? true : false} type="checkbox" value="Trusses" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Utilities") ? true : false} type="checkbox" value="Utilities" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Walls") ? true : false} type="checkbox" value="Walls" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Water Treatment Systems") ? true : false} type="checkbox" value="Water Treatment Systems" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Welding") ? true : false} type="checkbox" value="Welding" onChange={(e) => {
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
                                    <input checked={subCategory.includes("Windows") ? true : false} type="checkbox" value="Windows" onChange={(e) => {
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

                            ) : null

                            }

                        </div>

                        <div className='contact-house'>
                            <p>Contact:</p>
                            <input
                            value={contactName}
                            placeholder='First and last name'
                            required
                            onChange={(e) => setContactName(e.target.value)}
                            />

                            <input
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <div id='format-phone-text'>
                                <p>* Format phone numbers: xxx-xxx-xxxx</p>
                            </div>

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
                            value={faxNumber}
                            placeholder='Fax number'
                            onChange={(e) => setFaxNumber(e.target.value)}
                            />
                        </div>

                        <div className='location-house'>
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

                            <div className='city-state-input-house'>
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
                            </div>

                            <input
                            value={zip}
                            placeholder='Zip code'
                            onChange={(e) => setZip(e.target.value)}
                            />
                        </div>

                        <div className='notes-textarea-house'>
                            <p>Notes:</p>
                            <textarea
                            value={note}
                            placeholder='Additional information...'
                            onChange={(e) => setNote(e.target.value)}
                            />
                        </div>

                        <div className='update-add-entry-house'>
                            <button className='update-add-entry-button'>{entry ? 'Update entry' : 'Add entry'}</button>
                        </div>
                    </div>
            </form >
        </div>
    )
}
