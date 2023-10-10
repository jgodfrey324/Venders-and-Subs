from app.models import db, Company, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_companies():

    # GENERAL CONDITIONS
    aamold_engineering = Company(company_name='Aamold Engineering', address='579 Elkhart Lane', address_2='')
    action_design_construction = Company(company_name='Aamold Engineering', address='579 Elkhart Lane', address_2='')
    all_pro_moving = Company(company_name='All Pro Moving', address='559 Sandhill Lane #202', address_2='')
    areas_best_maintenance = Company(company_name='Areas Best Maintenance', address='P.O. Box 40395', address_2='')
    arches_engineering = Company(company_name='Arches Engineering', address='P.O Box 3852', address_2='2283 Ivory Co...?')
    aspen_earthmoving = Company(company_name='Aspen Earthmoving', address='818 Industrial Way', address_2='')
    avant_environmental_spec = Company(company_name='Avant Environmental Specialists', address='120 Mesa Grande Drive', address_2='')
    bailey_house_movers = Company(company_name='Bailey House Movers', address='3149 B. Road', address_2='')
    bighorn_consulting = Company(company_name='Bighorn Consulting Engineers', address='569 Westgate Drive, Suite 1', address_2='')
    black_diamond = Company(company_name='Black Diamond, Inc.', address='P.O Box 57', address_2='')
    bookcliff_survey_serv = Company(company_name='Bookcliff Survey Services, Inc.', address='136 East Third Street', address_2='')
    bridger_crane_rigging = Company(company_name='Bridger Crane & Rigging, LLC', address='838 - 21 1/2 Road', address_2='')
    buckhorn_geotech = Company(company_name='Buckhorn Geotech', address='222 South Park Avenue', address_2='')
    commercial_refuse = Company(company_name='Commercial Refuse Service', address='', address_2='')
    enterprises_traffic_control = Company(company_name='C C Enterprises Traffic Control SPecialists, Inc.', address='830 21 1/2 Road', address_2='')
    ccs_crane = Company(company_name='CCS Crane', address='4941 Co. Road 346', address_2='')
    cert_business_serv = Company(company_name='Certified Business Services, Inc.', address='6920 South Jordan Road, Suite K', address_2='')
    clymer_trucking = Company(company_name='Clymer Trucking', address='1713 Clymer Way', address_2='')
    cosco_industries = Company(company_name='Cosco Industries', address='West 215 Second Ave.', address_2='')
    crawford_trucking = Company(company_name='Crawford Trucking', address='2702 Hwy 50', address_2='')
    creative_lifting = Company(company_name='Creative Lifting Services, Inc.', address='', address_2='')
    croisant_cleaning = Company(company_name='Croisant Custom Cleaning', address='P.O. Box 189', address_2='')
    cr_surveying = Company(company_name='CR Surveying, LLC', address='717 Centauri Drive', address_2='')
    ctl_thompson = Company(company_name='CTL Thompson', address='1971 W. 12th Ave.', address_2='')
    custom_industries = Company(company_name='Custom Industries, Inc.', address='769 Valley Court', address_2='')
    delmont_consultants = Company(company_name='Del-Mont Consultants, Inc.', address='125 Colorado Ave.', address_2='')
    design_perspectives = Company(company_name='Design Perspectives, Ltd.', address='514 28 1/4 Road, Suite 2', address_2='')
    design_source_west = Company(company_name='Design Source West, Inc.', address='2219 Rimrock Road', address_2='')
    dh_surveys = Company(company_name='DH Surveys, Inc.', address='118 Ouray Ave.', address_2='')
    down_valley_septic = Company(company_name='Down Valley Septic, LLC', address='P.O. Box 1929', address_2='')
    eco_contracting = Company(company_name='ECO Contracting', address='35298 Hanson Mesa Road', address_2='')
    elwood_staffing = Company(company_name='Elwood Staffing (SOS)', address='359 Main Street, Suite 2', address_2='')
    essman_trucking = Company(company_name='Essman Trucking, Inc.', address='', address_2='')
    force_deconstruction = Company(company_name='Force Deconstruction, LLC.', address='9684 Hillside Road', address_2='')
    four_points = Company(company_name='Four Points Surveying & Engineering', address='P.O. Box 775966', address_2='')
    geotech_engineering = Company(company_name='Geotechnical Engineering Group', address='2308 Interstate Ave.', address_2='')
    goodwin_services = Company(company_name='Goodwin Services, Inc.', address='661 - 24 1/2 Road', address_2='')
    grand_river_environ = Company(company_name='Grand River Environmental, LLC', address='562 Huntington Point Lane', address_2='')
    grand_valley_repro = Company(company_name='Grand Valley Reprographics & Survey Supplies', address='565 - 25 Road #110-A', address_2='')
    ground_engineering = Company(company_name='Ground Engineering Consultants, Inc.', address='41 Inverness Drive East', address_2='')
    hawk_contracting = Company(company_name='Hawk Contracting Group, LLC', address='P.O. Box 490', address_2='402 S. 2nd Street')
    hepworth_geotech = Company(company_name='Hepworth-Pawlak Geotechnical, Inc.', address='5020 Country Road 154', address_2='')
    hi_desert = Company(company_name='Hi Desert', address='P.O. Box 537', address_2='')
    high_desert = Company(company_name='High Desert Surveying, LLC', address='1673 Hwy 50, Unit C', address_2='')
    huddleston_engineering = Company(company_name='Huddleston-Berry Engineering & Testing, LLC', address='640 White Ave.', address_2='')
    hy_safe_tech = Company(company_name='Hy-Safe Technology', address='960 Commerce Drive', address_2='')
    industrial_sys = Company(company_name='Industrial Systems, Inc.', address='5513 Hwy. 348', address_2='')
    jk_trucking = Company(company_name='J & K Trucking, LLC', address='3002 I-70 Business Loop, Unit #5', address_2='')
    key_people = Company(company_name='Key People Company', address='', address_2='')
    kn_window = Company(company_name='KN Professional Window Cleaning', address='P.O. Box 2114', address_2='')
    mary_vees_cleaning = Company(company_name='Mary Vees Cleaning', address='447 Sandia Drive', address_2='')
    mcgrath = Company(company_name='McGrath, Inc.', address='5353 W. Dartmouth, Suite 506', address_2='')
    midwest_scafford = Company(company_name='Midwest Scafford Service', address='3975 East 56th Ave.', address_2='')
    mmd_engineering = Company(company_name='MM & D Engineering Services', address='305 1/2 Main Street', address_2='')
    mwe_services = Company(company_name='MWE Services, Inc.', address='1935 Yolande Ave.', address_2='')
    neils_landscape = Company(company_name='Neils Lunceford Landscape Design/Build', address='307 East Capital Court', address_2='')
    phase_environ_consult = Company(company_name='Phase con Environmental Consultants', address='539 - 19 3/4 Road', address_2='')
    pioneer_propane = Company(company_name='Pioneer Propane, Inc.', address='741 - 1325 Road', address_2='')
    polaris_survey = Company(company_name='Polaris Surveying', address='3149 Mesa Ave., Unit B', address_2='')
    powers_ent = Company(company_name='Powers Enterprises, Inc.', address='1790 W. Victory Way', address_2='')
    rifle_works = Company(company_name='Rifle Works', address='124 E. 4th Street', address_2='')
    rw_trucking = Company(company_name='RW Trucking, LLC', address='599 McMullin Drive', address_2='')
    san_juan_surveying = Company(company_name='San Juan Surveying', address='160 Society Drive', address_2='')
    sensera_sys = Company(company_name='Sensera Systems', address='1212 Arapahoe Street', address_2='')
    skch_enterprise = Company(company_name='SKCH Enterprises, Inc.', address='P.O Box 938', address_2='')
    sgm_engineering = Company(company_name='SGM Engineering, Consulting & Surveying', address='118 W. 6th Street, Suite 200', address_2='')
    solar_valley_enterprise = Company(company_name='Solar Valley Enterprises, LLC', address='2618 West 13th', address_2='')
    stanton_engineering = Company(company_name='Stanton Engineering Solutions', address='P.O. Box 2510', address_2='')
    sterling_crane = Company(company_name='Sterling Crane', address='9351 Grant Street, Suite 250', address_2='')
    superior_traffic = Company(company_name='Superior Traffic Control', address='516 Fruitvale Court', address_2='')
    tanglewood = Company(company_name='Tanglewood', address='2355 County Road 226', address_2='')
    terracon = Company(company_name='Terracon', address='2308 Interstate Ave.', address_2='')
    tforce_engergy = Company(company_name='Tforce Energy Services', address='767 Valley Court', address_2='')
    total_personnel = Company(company_name='Total Personnel Management', address='2829 North Ave., Suite 202', address_2='')
    united_rentals = Company(company_name='United Rentals', address='2316 Interstate Ave.', address_2='')
    united_site_services = Company(company_name='United Site Services', address='5 Powerline Road', address_2='')
    united_site_colorado = Company(company_name='United Site Services of Colorado, Inc.', address='P.O. Box 219', address_2='')
    usc_labor_sol = Company(company_name='USC Labor Solutions, Inc.', address='1402 South Mail Street', address_2='')
    xtreme_crane = Company(company_name='Xtreme Crane', address='2701 Caribbean Drive', address_2='')
    yeh_associates = Company(company_name='Yeh & Associates, Inc.', address='588 North Commercial Drive', address_2='')
    your_way_safety = Company(company_name='Your Way Safety & Sign Supply', address='749 Winters Ave.', address_2='')
    zimmermann_construction = Company(company_name='Zimmermann Construction Staffing', address='701 Jenks Ave.', address_2='')

    # SITE CONSTRUCTION
    accurate_construction = Company(company_name='Accurate Construction & Excavation', address='P.O. Box 667', address_2='')
    adf_west = Company(company_name='ADF West, Inc.', address='7608 N. Kansas Ave.', address_2='')
    allred_paving = Company(company_name='Allred Paving', address='3996 W. 1500 N.', address_2='')
    all_service_septic = Company(company_name='All Service Septic', address='P.O. Box 2844', address_2='')
    alvin_landis = Company(company_name='Alvin L. Landis Contractor, Inc.', address='P.O. 4388', address_2='')
    a_maes_ing = Company(company_name='A-Maes-ing Landscape & Grounds Maintenance', address='2981 Brookside Drive', address_2='')
    armor_proseal = Company(company_name='Armor Proseal', address='3518 Congress Street', address_2='')
    arnies_excavating = Company(company_name='Arnie\'s Excavating', address='407 N. 7th Street', address_2='')
    artificial_turf = Company(company_name='Artificial Turf Supply', address='', address_2='')
    atlas_construction = Company(company_name='Atlas Construction', address='587 Health Drive', address_2='')
    avalon_landscaping = Company(company_name='Avalon Landscaping & Maintenance', address='312 East Highland Drive', address_2='')
    asphalt_specialists = Company(company_name='Asphalt Specialists Supply, Inc.', address='2462 Industrial Blvd.', address_2='')
    bolinger_queen = Company(company_name='Bolinger & Queen', address='32874 J Rd.', address_2='')
    ben_dowd_excav = Company(company_name='Ben Dowd Excavating', address='550 32 Road', address_2='')
    bookcliff_gardens = Company(company_name='Bookcliff Gardens', address='755 26 Road', address_2='')
    busy_beaver_landscaping = Company(company_name='Busy Beaver Landscaping', address='530 34 Road', address_2='')
    canyon_excavation = Company(company_name='Canyon Excavating', address='545 Canyon Creek Drive', address_2='')
    choate_excavating = Company(company_name='Choate Excavating', address='101 Fisher Canyon Drive', address_2='')
    clarke_co = Company(company_name='Clarke & Co.', address='3017 Highway 50', address_2='')
    co_asphalt_sealcoating = Company(company_name='Colorado Asphalt Sealcoating & Landscaping', address='', address_2='')


    list = [aamold_engineering, action_design_construction, all_pro_moving, areas_best_maintenance, arches_engineering, aspen_earthmoving, avant_environmental_spec, bailey_house_movers, bighorn_consulting, black_diamond, bookcliff_survey_serv, bridger_crane_rigging, buckhorn_geotech, commercial_refuse, enterprises_traffic_control, ccs_crane, cert_business_serv, clymer_trucking, cosco_industries, crawford_trucking, creative_lifting, croisant_cleaning, cr_surveying, ctl_thompson, custom_industries, delmont_consultants, design_perspectives, design_source_west, dh_surveys, down_valley_septic, eco_contracting, elwood_staffing, essman_trucking, force_deconstruction, four_points, geotech_engineering, goodwin_services, grand_river_environ, grand_valley_repro, ground_engineering, hawk_contracting, hepworth_geotech, hi_desert, high_desert, huddleston_engineering, hy_safe_tech, industrial_sys, jk_trucking, key_people, kn_window, mary_vees_cleaning, mcgrath, midwest_scafford, mmd_engineering, mwe_services, neils_landscape, phase_environ_consult, pioneer_propane, polaris_survey, powers_ent, rifle_works, rw_trucking, san_juan_surveying, sensera_sys, skch_enterprise, sgm_engineering, solar_valley_enterprise, stanton_engineering, sterling_crane, superior_traffic, tanglewood, terracon, tforce_engergy, total_personnel, united_rentals, united_site_services, united_site_colorado, usc_labor_sol, xtreme_crane, yeh_associates, your_way_safety, zimmermann_construction, accurate_construction, adf_west, allred_paving, all_service_septic, alvin_landis]

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_companie():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.companies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM companies"))

    db.session.commit()
