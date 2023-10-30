import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
// import { getAllEntries } from '../../store/entries';
import "./NewEntryFormPage.css"

export default function NewEntryFormPage () {
    // const dispatch = useDispatch()
    const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);
    const [company, setCompany] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
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
        setCompany('')
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
                            <option value="concrete">Concrete</option>
                            <option value="conveying-systems">Conveying Systems</option>
                            <option value="doors-windows">Doors & Windows</option>
                            <option value="electrical">Electrical</option>
                            <option value="equipment">Equipment</option>
                            <option value="finishes">Finishes</option>
                            <option value="furnishings">Furnishings</option>
                            <option value="general-conditions">General Conditions</option>
                            <option value="masonry">Masonry</option>
                            <option value="mechanical">Mechanical</option>
                            <option value="site-construction">Site Construction</option>
                            <option value="specialties">Specialties</option>
                            <option value="special-construction">Special Construction</option>
                            <option value="steel">Steel</option>
                            <option value="thermal-moisture">Thermal & Moisture Protection</option>
                            <option value="wood-plastics">Wood & Plastics</option>
                        </select>

                        <fieldset>
                            <legend>Select subcategories:</legend>

                            <div>
                                <input type="checkbox" id="appliances" name="appliances" />
                                <label for="appliances">Appliances</label>
                            </div>

                            <div>
                                <input type="checkbox" id="asphalt" name="asphalt" />
                                <label for="asphalt">Asphalt</label>
                            </div>

                            <div>
                                <input type="checkbox" id="billing" name="billing" />
                                <label for="billing">Billing</label>
                            </div>

                            <div>
                                <input type="checkbox" id="brick" name="brick" />
                                <label for="brick">Brick</label>
                            </div>

                            <div>
                                <input type="checkbox" id="cabinetry" name="cabinetry" />
                                <label for="cabinetry">Cabinetry</label>
                            </div>

                            <div>
                                <input type="checkbox" id="caisson" name="caisson" />
                                <label for="caisson">Caisson</label>
                            </div>

                            <div>
                                <input type="checkbox" id="carpentry" name="carpentry" />
                                <label for="carpentry">Carpentry</label>
                            </div>

                            <div>
                                <input type="checkbox" id="ceilings" name="ceilings" />
                                <label for="ceilings">Ceilings</label>
                            </div>

                            <div>
                                <input type="checkbox" id="chinking" name="chinking" />
                                <label for="chinking">Chinking</label>
                            </div>

                            <div>
                                <input type="checkbox" id="cleaning" name="cleaning" />
                                <label for="cleaning">Cleaning</label>
                            </div>

                            <div>
                                <input type="checkbox" id="communications" name="communications" />
                                <label for="communications">Communications</label>
                            </div>

                            <div>
                                <input type="checkbox" id="compaction" name="compaction" />
                                <label for="compaction">Compaction</label>
                            </div>

                            <div>
                                <input type="checkbox" id="composites" name="composites" />
                                <label for="composites">Composites</label>
                            </div>

                            <div>
                                <input type="checkbox" id="concrete" name="concrete" />
                                <label for="concrete">Concrete</label>
                            </div>

                            <div>
                                <input type="checkbox" id="construction-management" name="construction-management" />
                                <label for="construction-management">Construction Management</label>
                            </div>

                            <div>
                                <input type="checkbox" id="consulting" name="consulting" />
                                <label for="consulting">Consulting</label>
                            </div>

                            <div>
                                <input type="checkbox" id="countertops" name="countertops" />
                                <label for="countertops">Countertops</label>
                            </div>

                            <div>
                                <input type="checkbox" id="demolition" name="demolition" />
                                <label for="demolition">Demolition</label>
                            </div>

                            <div>
                                <input type="checkbox" id="design" name="design" />
                                <label for="design">Design</label>
                            </div>

                            <div>
                                <input type="checkbox" id="doors" name="doors" />
                                <label for="doors">Doors</label>
                            </div>

                            <div>
                                <input type="checkbox" id="drilling" name="drilling" />
                                <label for="drilling">Drilling</label>
                            </div>

                            <div>
                                <input type="checkbox" id="earthwork" name="earthwork" />
                                <label for="earthwork">Earthwork</label>
                            </div>

                            <div>
                                <input type="checkbox" id="electrical" name="electrical" />
                                <label for="electrical">Electrical</label>
                            </div>

                            <div>
                                <input type="checkbox" id="elevators" name="elevators" />
                                <label for="elevators">Elevators</label>
                            </div>

                            <div>
                                <input type="checkbox" id="engineering" name="engineering" />
                                <label for="engineering">Engineering</label>
                            </div>

                            <div>
                                <input type="checkbox" id="equipment" name="equipment" />
                                <label for="equipment">Equipment</label>
                            </div>

                            <div>
                                <input type="checkbox" id="erosion-control" name="erosion-control" />
                                <label for="erosion-control">Erosion Control</label>
                            </div>

                            <div>
                                <input type="checkbox" id="estimation" name="estimation" />
                                <label for="estimation">Estimation</label>
                            </div>

                            <div>
                                <input type="checkbox" id="excavation" name="excavation" />
                                <label for="excavation">Excavation</label>
                            </div>

                            <div>
                                <input type="checkbox" id="fabrication" name="fabrication" />
                                <label for="fabrication">Fabrication</label>
                            </div>

                            <div>
                                <input type="checkbox" id="fascial" name="fascial" />
                                <label for="fascial">Fascial</label>
                            </div>

                            <div>
                                <input type="checkbox" id="fencing" name="fencing" />
                                <label for="fencing">Fencing</label>
                            </div>

                            <div>
                                <input type="checkbox" id="fire-protection" name="fire-protection" />
                                <label for="fire-protection">Fire Protection</label>
                            </div>

                            <div>
                                <input type="checkbox" id="flooring" name="flooring" />
                                <label for="flooring">Flooring</label>
                            </div>

                            <div>
                                <input type="checkbox" id="foundations" name="foundations" />
                                <label for="foundations">Foundations</label>
                            </div>

                            <div>
                                <input type="checkbox" id="framing" name="framing" />
                                <label for="framing">Framing</label>
                            </div>

                            <div>
                                <input type="checkbox" id="garbage" name="garbage" />
                                <label for="garbage">Garbage</label>
                            </div>

                            <div>
                                <input type="checkbox" id="glass" name="glass" />
                                <label for="glass">Glass</label>
                            </div>

                            <div>
                                <input type="checkbox" id="granite" name="granite" />
                                <label for="granite">Granite</label>
                            </div>

                            <div>
                                <input type="checkbox" id="gravel" name="gravel" />
                                <label for="gravel">Gravel</label>
                            </div>

                            <div>
                                <input type="checkbox" id="gutters" name="gutters" />
                                <label for="gutters">Gutters</label>
                            </div>

                            <div>
                                <input type="checkbox" id="hardware" name="hardware" />
                                <label for="hardware">Hardware</label>
                            </div>

                            <div>
                                <input type="checkbox" id="hvac" name="hvac" />
                                <label for="hvac">HVAC</label>
                            </div>

                            <div>
                                <input type="checkbox" id="insulating" name="insulating" />
                                <label for="insulating">Insulating</label>
                            </div>

                            <div>
                                <input type="checkbox" id="interior-plaster" name="interior-plaster" />
                                <label for="interior-plaster">Interior Plaster</label>
                            </div>

                            <div>
                                <input type="checkbox" id="irrigation" name="irrigation" />
                                <label for="irrigation">Irrigation</label>
                            </div>

                            <div>
                                <input type="checkbox" id="ladders" name="ladders" />
                                <label for="ladders">Ladders</label>
                            </div>

                            <div>
                                <input type="checkbox" id="landscaping" name="landscaping" />
                                <label for="landscaping">Landscaping</label>
                            </div>

                            <div>
                                <input type="checkbox" id="lumber" name="lumber" />
                                <label for="lumber">Lumber</label>
                            </div>

                            <div>
                                <input type="checkbox" id="maintenance" name="maintenance" />
                                <label for="maintenance">Maintenance</label>
                            </div>

                            <div>
                                <input type="checkbox" id="marble" name="marble" />
                                <label for="marble">Marble</label>
                            </div>

                            <div>
                                <input type="checkbox" id="masonry" name="masonry" />
                                <label for="masonry">Masonry</label>
                            </div>

                            <div>
                                <input type="checkbox" id="metal" name="metal" />
                                <label for="metal">Metal</label>
                            </div>

                            <div>
                                <input type="checkbox" id="millwork" name="millwork" />
                                <label for="millwork">Millwork</label>
                            </div>

                            <div>
                                <input type="checkbox" id="moving" name="moving" />
                                <label for="moving">Moving</label>
                            </div>

                            <div>
                                <input type="checkbox" id="painting" name="painting" />
                                <label for="painting">Painting</label>
                            </div>

                            <div>
                                <input type="checkbox" id="parrapet" name="parrapet" />
                                <label for="parrapet">Parrapet</label>
                            </div>

                            <div>
                                <input type="checkbox" id="piers" name="piers" />
                                <label for="piers">Piers</label>
                            </div>

                            <div>
                                <input type="checkbox" id="piles" name="piles" />
                                <label for="piles">Piles</label>
                            </div>

                            <div>
                                <input type="checkbox" id="plastics" name="plastics" />
                                <label for="plastics">Plastics</label>
                            </div>

                            <div>
                                <input type="checkbox" id="plumbing" name="plumbing" />
                                <label for="plumbing">Plumbing</label>
                            </div>

                            <div>
                                <input type="checkbox" id="proofing" name="proofing" />
                                <label for="proofing">Proofing</label>
                            </div>

                            <div>
                                <input type="checkbox" id="propane" name="propane" />
                                <label for="propane">Propane</label>
                            </div>

                            <div>
                                <input type="checkbox" id="quality-control" name="quality-control" />
                                <label for="quality-control">Quality Control</label>
                            </div>

                            <div>
                                <input type="checkbox" id="quartz" name="quartz" />
                                <label for="quartz">Quartz</label>
                            </div>

                            <div>
                                <input type="checkbox" id="remodeling" name="remodeling" />
                                <label for="remodeling">Remodeling</label>
                            </div>

                            <div>
                                <input type="checkbox" id="rentals" name="rentals" />
                                <label for="rentals">Rentals</label>
                            </div>

                            <div>
                                <input type="checkbox" id="rock" name="rock" />
                                <label for="rock">Rock</label>
                            </div>

                            <div>
                                <input type="checkbox" id="roofing" name="roofing" />
                                <label for="roofing">Roofing</label>
                            </div>

                            <div>
                                <input type="checkbox" id="safety" name="safety" />
                                <label for="safety">Safety</label>
                            </div>

                            <div>
                                <input type="checkbox" id="scaffolding" name="scaffolding" />
                                <label for="scaffolding">Scaffolding</label>
                            </div>

                            <div>
                                <input type="checkbox" id="security" name="security" />
                                <label for="security">Security</label>
                            </div>

                            <div>
                                <input type="checkbox" id="septic-services" name="septic-services" />
                                <label for="septic-services">Septic Services</label>
                            </div>

                            <div>
                                <input type="checkbox" id="showers" name="showers" />
                                <label for="showers">Showers</label>
                            </div>

                            <div>
                                <input type="checkbox" id="siding" name="siding" />
                                <label for="siding">Siding</label>
                            </div>

                            <div>
                                <input type="checkbox" id="soffit" name="soffit" />
                                <label for="soffit">Soffit</label>
                            </div>

                            <div>
                                <input type="checkbox" id="specialties" name="specialties" />
                                <label for="specialties">Specialties</label>
                            </div>

                            <div>
                                <input type="checkbox" id="specs-reproduction" name="specs-reproduction" />
                                <label for="specs-reproduction">Specs Reproduction</label>
                            </div>

                            <div>
                                <input type="checkbox" id="stabilization" name="stabilization" />
                                <label for="stabilization">Stabilization</label>
                            </div>

                            <div>
                                <input type="checkbox" id="staffing" name="staffing" />
                                <label for="staffing">Staffing</label>
                            </div>

                            <div>
                                <input type="checkbox" id="stairs" name="stairs" />
                                <label for="stairs">Stairs</label>
                            </div>

                            <div>
                                <input type="checkbox" id="steel" name="steel" />
                                <label for="steel">Steel</label>
                            </div>

                            <div>
                                <input type="checkbox" id="stone" name="stone" />
                                <label for="stone">Stone</label>
                            </div>

                            <div>
                                <input type="checkbox" id="storage" name="storage" />
                                <label for="storage">Storage</label>
                            </div>

                            <div>
                                <input type="checkbox" id="stormwater" name="stormwater" />
                                <label for="stormwater">Stormwater</label>
                            </div>

                            <div>
                                <input type="checkbox" id="stucco" name="stucco" />
                                <label for="stucco">Stucco</label>
                            </div>

                            <div>
                                <input type="checkbox" id="surveying" name="surveying" />
                                <label for="surveying">Surveying</label>
                            </div>

                            <div>
                                <input type="checkbox" id="tile" name="tile" />
                                <label for="tile">Tile</label>
                            </div>

                            <div>
                                <input type="checkbox" id="traffic-control" name="traffic-control" />
                                <label for="traffic-control">Traffic Control</label>
                            </div>

                            <div>
                                <input type="checkbox" id="trench" name="trench" />
                                <label for="trench">Trench</label>
                            </div>

                            <div>
                                <input type="checkbox" id="trim" name="trim" />
                                <label for="trim">Trim</label>
                            </div>

                            <div>
                                <input type="checkbox" id="trucking" name="trucking" />
                                <label for="trucking">Trucking</label>
                            </div>

                            <div>
                                <input type="checkbox" id="trusses" name="trusses" />
                                <label for="trusses">Trusses</label>
                            </div>

                            <div>
                                <input type="checkbox" id="utilities" name="utilities" />
                                <label for="utilities">Utilities</label>
                            </div>

                            <div>
                                <input type="checkbox" id="walls" name="walls" />
                                <label for="walls">Walls</label>
                            </div>

                            <div>
                                <input type="checkbox" id="water-treatment" name="water-treatment" />
                                <label for="water-treatment">Water Treatment Systems</label>
                            </div>

                            <div>
                                <input type="checkbox" id="welding" name="welding" />
                                <label for="welding">Welding</label>
                            </div>

                            <div>
                                <input type="checkbox" id="windows" name="windows" />
                                <label for="windows">Windows</label>
                            </div>
                        </fieldset>

                        <button>Add entry</button>
                    </div>
            </form >
        </div>
    )
}
