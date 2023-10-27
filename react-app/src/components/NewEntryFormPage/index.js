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
                        </fieldset>
                            {/* appliances,asphalt,billing,brick,cabinetry,caisson,carpentry,ceilings,chinking,cleaning,communications,compaction,composites,concrete,construction_management,consulting,countertops,demolition,design,doors,drilling,earthwork,electrical,elevators,engineering,equipment,erosion_control,estimation,excavation,fabrication,fascial,fencing,fire_protection,flooring,foundations,framing,garbage,glass,granite,gravel,gutters,hardware,hvac,insulating,interior_plaster,irrigation,ladders,landscaping,lumber,maintenance,marble,masonry,metal,millwork,moving,painting,parrapet,piers,piles,plastics,plumbing,proofing,propane,quality_control,quartz,remodeling,rentals,rock,roofing,safety,scaffolding,security,septic_services,showers,siding,soffit,specialties,specs_reproduction,stabilization,staffing,stairs,steel,stone,storage,stormwater,stucco,surveying,tile,traffic_control,trench,trim,trucking,trusses,utilities,walls,water_treatment_systems,welding,windows */}

                        <button>Add entry</button>
                    </div>
            </form >
        </div>
    )
}
