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


    list_1 = [aamold_engineering, action_design_construction, all_pro_moving, areas_best_maintenance, arches_engineering, aspen_earthmoving, avant_environmental_spec, bailey_house_movers, bighorn_consulting, black_diamond, bookcliff_survey_serv, bridger_crane_rigging, buckhorn_geotech, commercial_refuse, enterprises_traffic_control, ccs_crane, cert_business_serv, clymer_trucking, cosco_industries, crawford_trucking, creative_lifting, croisant_cleaning, cr_surveying, ctl_thompson, custom_industries, delmont_consultants, design_perspectives, design_source_west, dh_surveys, down_valley_septic, eco_contracting, elwood_staffing, essman_trucking, force_deconstruction, four_points, geotech_engineering, goodwin_services, grand_river_environ, grand_valley_repro, ground_engineering, hawk_contracting, hepworth_geotech, hi_desert, high_desert, huddleston_engineering, hy_safe_tech, industrial_sys, jk_trucking, key_people, kn_window, mary_vees_cleaning, mcgrath, midwest_scafford, mmd_engineering, mwe_services, neils_landscape, phase_environ_consult, pioneer_propane, polaris_survey, powers_ent, rifle_works, rw_trucking, san_juan_surveying, sensera_sys, skch_enterprise, sgm_engineering, solar_valley_enterprise, stanton_engineering, sterling_crane, superior_traffic, tanglewood, terracon, tforce_engergy, total_personnel, united_rentals, united_site_services, united_site_colorado, usc_labor_sol, xtreme_crane, yeh_associates, your_way_safety, zimmermann_construction]


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
    co_asphalt_main = Company(company_name='Colorado Asphalt Maintenance', address='610 -33 Road', address_2='')
    co_grouting = Company(company_name='Colorado Grouting, Inc.', address='1867 E. Platteville Blvd.', address_2='')
    co_piling = Company(company_name='Colorado Piling Service', address='P.O. Box 1824', address_2='')
    coloscapes_concrete = Company(company_name='Coloscapes Concrete', address='P.O. Box 207', address_2='')
    co_west_contracting = Company(company_name='Colorado West Contracting, Inc.', address='241 -31 3/10 Road', address_2='')
    crazy_final_touch = Company(company_name='Crazy 8 The Final Touch', address='', address_2='')
    cw_construction = Company(company_name='CW Construction', address='433 Keener Street', address_2='')
    dale_quality_land = Company(company_name='Dale\'s Quality Landscaping', address='629 Braemer Circle', address_2='')
    deep_creek = Company(company_name='Deep Creek, Inc.', address='840 23 1/2 Road', address_2='')
    dependable_land = Company(company_name='Dependable Landscaping', address='1752 L 1/2 Road', address_2='')
    dj_landscaping = Company(company_name='DJ\'s Landscaping', address='', address_2='')
    downing_diversified = Company(company_name='Downing Diversified', address='P.O. Box 33', address_2='447 N. First St.')
    down_to_earth = Company(company_name='Down To Earth Compliance', address='2460 S. Syracuse Way', address_2='')
    dynamic_hardscape = Company(company_name='Dynamic Hardscape in Landscaping, LLC', address='127 22 Court', address_2='')
    eagles_nest_contract = Company(company_name='Eagles Nest Contracting', address='189 Sun Hawk Drive', address_2='')
    elam_construction = Company(company_name='Elam Contruction', address='556 Struthers Avenue', address_2='')
    elite_field_services = Company(company_name='Elite Field Services, LLC', address='377 Indian Road', address_2='')
    empire_demo = Company(company_name='Empire Demolition & Property Services, LLC', address='P.O. Box 432', address_2='')
    england_fence = Company(company_name='England Fence Company', address='1568 N. Townsend Ave.', address_2='')
    environ_connection = Company(company_name='Environmental Connection, LLC', address='10296 Cherryhurst Ln.', address_2='')
    excel_environ = Company(company_name='Excel Environmental, Inc.', address='1852 Jasper Street, Unit E', address_2='')
    farmsworth_construction = Company(company_name='Farmsworth Construction & Gravel Co.', address='175 Hwy 133', address_2='')
    filter_tech = Company(company_name='Filter Tech Systems, Inc.', address='2844 Chipeta Ave.', address_2='')
    flattop_steel = Company(company_name='Flattop Steel Piering', address='1171 16 Road', address_2='')
    four_evergreen_land = Company(company_name='4 Evergreen Landscape (DO NOT USE)', address='516 1/2 Florence Road', address_2='')
    four_seasons_main = Company(company_name='Four Seasons Property Maintenance & Landscape', address='P.O. Box 9545', address_2='')
    frontier_paving = Company(company_name='Frontier Paving', address='P.O. Box 1167', address_2='854 Bedrock...?')
    g_g_paving = Company(company_name='G & G Paving Construction, Inc.', address='1005 N. 12th Street', address_2='')
    grade_plus = Company(company_name='Grade Plus, Inc.', address='P.O. Box 40722', address_2='')
    grand_junc_ready_mix = Company(company_name='Grand Junction Ready Mix', address='P.O. Box 1849', address_2='')
    great_divide_earth = Company(company_name='Great Divide Earthworks', address='1950 Timber Falls Drive', address_2='')
    gross_excavating = Company(company_name='Gross Excavating, Inc.', address='P.O. Box 417', address_2='')
    gunnison_construc = Company(company_name='Gunnison Construction & Septic', address='720 S. 8th Street', address_2='')
    gunnison_gravel = Company(company_name='Gunnison Gravel & Earthmoving', address='P.O. Box 42', address_2='')
    hawk_excavation = Company(company_name='Hawk Excavation & Construction', address='P.O. Box 379', address_2='')
    hi_river_construc = Company(company_name='Hi River Construction, Inc.', address='P.O. Box 55116', address_2='')
    hill_builders = Company(company_name='Hill Builders, Inc.', address='3762 Highway 82, Suite 2', address_2='')
    intermountain_helical = Company(company_name='Intermountain Helical Piers', address='14712 So. Heritage Crest Way', address_2='')
    intermountain_landscape = Company(company_name='Intermountain Landscape & Sprinkler, Inc.', address='17000 S. Golden Road, Suite 101', address_2='')
    j_c_excavating = Company(company_name='J C Excavating, Inc.', address='600 Cardinal Way', address_2='')
    jmi_excavating = Company(company_name='JMI Excavating', address='4595 Country Road 10', address_2='')
    kb_construction = Company(company_name='KB Construction & Excavation, Inc.', address='P.O. Box 4008', address_2='')
    k_d_construction = Company(company_name='K & D Construction', address='', address_2='')
    kr_swerdfeger = Company(company_name='K.R. Swerdfeger Construction, Inc.', address='421 East Industrial Blvd.', address_2='')
    kumar_associates = Company(company_name='Kumar & Associates, Inc.', address='319 S. 3rd St.', address_2='')
    landscape_tech = Company(company_name='Landscape Technologies, Inc.', address='P.O. Box 486', address_2='')
    m_m_excavation = Company(company_name='M & M Excavation', address='P.O. Box 174', address_2='')
    m_a_concrete = Company(company_name='M A Concrete Construction', address='P.O. Box 1968', address_2='')
    maple_leaf_landscape = Company(company_name='Maple Leaf Landscaping & Maintenance, Inc.', address='197 Sun Hawk Drive', address_2='')
    martin_construction = Company(company_name='Martin Construction, Co.', address='1026 19 1/2 Road', address_2='')
    maximum_services = Company(company_name='Maximum Services', address='P.O. Box 695', address_2='')
    mays_concrete = Company(company_name='May\'s Concrete, Inc.', address='2399 River Road', address_2='')
    mays_construction = Company(company_name='May\'s Construction Specialties', address='P.O. Box 4229', address_2='')
    meeker_sand_gravel = Company(company_name='Meeker Sand & Gravel, Inc.', address='', address_2='')
    metro_fence_company = Company(company_name='Metro Fence Company, Inc.', address='8335 Quebec Street', address_2='')
    metzger_brothers_concrete = Company(company_name='Metzger Brothers Concrete', address='P.O. Box 1076', address_2='')
    misty_mountain_sprink = Company(company_name='Misty Mountain Sprinkler Systems (WOE)', address='1808 Story Lane', address_2='')
    mountain_valley_contract = Company(company_name='Mountain Valley Contracting', address='605 -28 1/4 Road, Suite B', address_2='')
    munro_supply = Company(company_name='Munro Supply, Inc.', address='P.O. Box 519', address_2='')
    neils_lunceford = Company(company_name='Neils Lunceford, Inc.', address='P.O. Box 2130', address_2='740 Blue River...?')
    northwest_ready_mix = Company(company_name='Northwest Ready Mix, Inc.', address='2930 E. Hwy 40', address_2='')
    oec_construction = Company(company_name='OEC Construction (OUT OF BUSINESS?)', address='1100 Fruit Park Trail', address_2='')
    old_castle = Company(company_name='Old Castle', address='', address_2='')
    olsson_associates = Company(company_name='Olsson Associates', address='760 Horizon Drive, Suite 102', address_2='')
    on_grade_excavation = Company(company_name='On Grade Excavation', address='2811 Patterson Road', address_2='')
    palisade_constructors = Company(company_name='Palisade Constructors, Inc. (DO NOT USE)', address='695 36 Road', address_2='')
    paragon_excavating = Company(company_name='Paragon Excavating Services', address='P.O. Box 1432', address_2='')
    parkerson_construction = Company(company_name='Parkerson Construction', address='710 S. 15th Street', address_2='')
    patriot_highway_markings = Company(company_name='Patriot Highway Markings', address='P.O. Box 1628', address_2='')
    penley_concrete = Company(company_name='Penley Concrete & Caisson Drilling', address='P.O. Box 759', address_2='')
    professional_pipe_concrete = Company(company_name='Professional Pipe & Concrete', address='', address_2='')
    quality_underground = Company(company_name='Quality Underground', address='3785 Interpark Drive', address_2='')
    rainbow_valley_asphalt = Company(company_name='Rainbow Valley Asphalt', address='1920 M. Road', address_2='')
    rainmaker = Company(company_name='Rainmaker, Inc.', address='17656 Highway 550', address_2='')
    rdc_inc = Company(company_name='RDC, Inc.', address='40320 CR 80', address_2='')
    rex_phelps = Company(company_name='Rex Phelps for Landscaping & Irrigation', address='372 29 5/8 Road', address_2='')
    rocky_mountain_civil = Company(company_name='Rocky Mountain Civil, Inc.', address='2875 C 1/2 Road #6', address_2='')
    rocky_mountain_rebar = Company(company_name='Rocky Mountain Rebar, H & H Bolt', address='686 Industrial Blvd.', address_2='')
    roop_excavating = Company(company_name='Roop Excavating', address='39585 Lund Road', address_2='')
    sako_excavation = Company(company_name='Sako Excavation', address='1254 Country Road', address_2='')
    savage_excavation = Company(company_name='Savage Excavation', address='P.O. Box 2916', address_2='')
    sheridan_mountain_excavation = Company(company_name='Sheridan Mountain Excavation, LLC', address='P.O. Box 1933', address_2='300 Whitehoc...?')
    skyline_contracting = Company(company_name='Skyline Contracting', address='3191 Mesa Avenue', address_2='')
    sky_ute_sand = Company(company_name='Sky Ute Sand & Gravel', address='P.O. Box 2270', address_2='')
    sorter_construction = Company(company_name='Sorter Construction, Inc.', address='2802 Highway 50', address_2='')
    southwest_soils = Company(company_name='Southwest Soils / Pioneer Sand', address='58521 Amber Road', address_2='')
    straight_edge_striping = Company(company_name='Straight Edge Striping', address='3019 D 1/2 Road', address_2='')
    tallgrass_landscape = Company(company_name='Tallgrass Landscape & Construction', address='', address_2='')
    tally_ho_construction = Company(company_name='Tally Ho Construction', address='0145 County Road 225', address_2='')
    taylor_fence_denver = Company(company_name='Taylor Fence Company of Denver', address='2531 West 62nd Court, Unit H', address_2='')
    taylor_fence_gj = Company(company_name='Taylor Fence Company of Grand Junction', address='P.O. Box 3125', address_2='')
    td_hydro_vac = Company(company_name='TD Hydro Vac', address='747 Buckhorn Drive', address_2='')
    landscape_center = Company(company_name='The Landscape Center', address='2523 High Country Court', address_2='')
    three_acres_landscape = Company(company_name='Three Acres Landscaping (OUT OF BUSINESS)', address='516 Fruitvale Court, Suite A', address_2='')
    trench_shoring = Company(company_name='Trench Shoring Services', address='3174 Perkins Drive', address_2='')
    tuff_excavation = Company(company_name='Tuff Excavation, Inc.', address='3498 E. 3500 S.', address_2='')
    ty_striping = Company(company_name='Ty Striping', address='1330 N. 17th Street', address_2='')
    unitah_basin_lawn = Company(company_name='Unitah Basin Lawn & Landscaping', address='4464 W. 3000 S.', address_2='')
    united_companies = Company(company_name='United Companies', address='21830 U.S 550', address_2='')
    united_paving = Company(company_name='United Paving', address='2273 River Road', address_2='')
    united_redi_mix = Company(company_name='United Redi-Mix Concrete', address='P.O. Box 3609', address_2='')
    upland_companies = Company(company_name='Upland Companies', address='P.O. Box 1380', address_2='')
    valley_excavating_glenwood = Company(company_name='Valley Excavating of Glenwood', address='192 Ponderosa Drive', address_2='')
    valley_wide_fence = Company(company_name='Valley Wide Fence', address='2105 East Main Street', address_2='')
    vista_paving_corp = Company(company_name='Vista Paving Corporation', address='1000 N. 9th Street, #27', address_2='')
    wagner_construction = Company(company_name='Wagner Construction, Inc.', address='1850 East 1st Street', address_2='')
    wd_yards = Company(company_name='WD Yards', address='577 N. Westgate Drive', address_2='')
    western_piling = Company(company_name='Western Piling & Caisson, Inc.', address='P.O. Box 2052', address_2='')
    western_pipeline_util = Company(company_name='Western Pipeline Utilities Construction, Inc.', address='3643 Front Street', address_2='')
    western_states_reclam = Company(company_name='Western States Reclamation, Inc.', address='3756 Imperial Street', address_2='')
    white_mountain_operating = Company(company_name='White Mountain Operating', address='601 Silver Plume Drive', address_2='')
    white_water_building = Company(company_name='White Water Building Materials', address='P.O. Box 1769', address_2='')
    williams_construction = Company(company_name='Williams Construction', address='P.O. Box 704', address_2='')
    wilson_backhoe_service = Company(company_name='Wilson Backhoe Service', address='3115 C Road', address_2='')
    wishbone_hoe_service = Company(company_name='Wishbone Hoe Service', address='162 Drumlin Circle', address_2='')
    yenter_companies = Company(company_name='Yenter Companies', address='2388 Leland Ave.', address_2='')


    list_2 = [accurate_construction, adf_west, allred_paving, all_service_septic, alvin_landis, a_maes_ing, armor_proseal, arnies_excavating, artificial_turf, atlas_construction, avalon_landscaping, asphalt_specialists, bolinger_queen, ben_dowd_excav, bookcliff_gardens, busy_beaver_landscaping, canyon_excavation, choate_excavating, clarke_co, co_asphalt_sealcoating, co_asphalt_main, co_grouting, co_piling, coloscapes_concrete, co_west_contracting, crazy_final_touch, cw_construction, dale_quality_land, deep_creek, dependable_land, dj_landscaping, downing_diversified, down_to_earth, dynamic_hardscape, eagles_nest_contract, elam_construction, elite_field_services, empire_demo, england_fence, environ_connection, excel_environ, farmsworth_construction, filter_tech, flattop_steel, four_evergreen_land, four_seasons_main, frontier_paving, g_g_paving, grade_plus, grand_junc_ready_mix, great_divide_earth, gross_excavating, gunnison_construc, gunnison_gravel, hawk_excavation, hi_river_construc, hill_builders, intermountain_helical, intermountain_landscape, j_c_excavating, jmi_excavating, kb_construction, k_d_construction, kr_swerdfeger, kumar_associates, landscape_tech, m_m_excavation, m_a_concrete, maple_leaf_landscape, martin_construction, maximum_services, mays_concrete, mays_construction, meeker_sand_gravel, metro_fence_company, metzger_brothers_concrete, misty_mountain_sprink, mountain_valley_contract, munro_supply, neils_lunceford, northwest_ready_mix, oec_construction, old_castle, olsson_associates, on_grade_excavation, palisade_constructors, paragon_excavating, parkerson_construction, patriot_highway_markings, penley_concrete, professional_pipe_concrete, quality_underground, rainbow_valley_asphalt, rainmaker, rdc_inc, rex_phelps, rocky_mountain_civil, rocky_mountain_rebar, roop_excavating, sako_excavation, savage_excavation, sheridan_mountain_excavation, skyline_contracting, sky_ute_sand, sorter_construction, southwest_soils, straight_edge_striping, tallgrass_landscape, tally_ho_construction, taylor_fence_denver, taylor_fence_gj, td_hydro_vac, landscape_center, three_acres_landscape, trench_shoring, tuff_excavation, ty_striping, unitah_basin_lawn, united_companies, united_paving, united_redi_mix, upland_companies, valley_excavating_glenwood, valley_wide_fence, vista_paving_corp, wagner_construction, wd_yards, western_piling, western_pipeline_util, western_states_reclam, white_mountain_operating, white_water_building, williams_construction, wilson_backhoe_service, wishbone_hoe_service, yenter_companies]


    # CONCRETE
    a_s_sandblasting = Company(company_name='A & S Sandblasting & Coating, LLC', address='2488 Commerce Blvd', address_2='')
    accurate_concrete = Company(company_name='Accurate Concrete Cutting, Inc.', address='1133 23 1/2 Road', address_2='')
    ach_foam_tech = Company(company_name='ACH Foam Technologies, LLC', address='5250 N. Sherman Street', address_2='')
    adcock_concrete = Company(company_name='Adcock Concrete', address='2458 Industrial Blvd., Suite 1', address_2='')
    advanced_concrete_co = Company(company_name='Advanced Concrete of Colorado', address='170 T2 Trail', address_2='')
    aleman_concrete = Company(company_name='Aleman Concrete', address='1061 W. Beaver Creek Blvd.', address_2='')
    architectural_concrete = Company(company_name='Architectural Concrete Finishes', address='P.O. Box 1342', address_2='')
    arco_concrete = Company(company_name='ARCO Concrete, Inc.', address='12672 WCR 6 1/4', address_2='')
    bear_concrete = Company(company_name='Bear Concrete', address='2243 Wakefield Drive', address_2='')
    brundage_bone_concrete = Company(company_name='Brundage-Bone Concrete Pumping', address='', address_2='')
    beyond_your_ordinary = Company(company_name='Beyond Your Ordinary Recreation', address='405 Golfway West Drive, Suite 302', address_2='')
    burner_construction = Company(company_name='Burner Construction, LLC', address='118 North Willow Street', address_2='')
    calco_concrete = Company(company_name='Calco Concrete Pumping, Inc.', address='P.O. Box 3775', address_2='')
    carver_brothers = Company(company_name='Carver Brothers, Inc.', address='P.O. Box 175', address_2='')
    co_concrete = Company(company_name='Colorado Concrete Accessories', address='2474 Industrial Blvd.', address_2='')
    co_precast = Company(company_name='Colorado Precast Concrete', address='1820 E. Hwy 402', address_2='')
    concrete_equip_supply = Company(company_name='Concrete Equipment & Supply', address='145 W. Main', address_2='')
    concrete_floor_sys = Company(company_name='Concrete Floor Systems, LLC', address='2051 W. College Ave.', address_2='')
    concrete_sys = Company(company_name='Concrete Systems, Inc.', address='881 Bidwell Ave.', address_2='')
    contracting_specialties = Company(company_name='Contracting Specialties', address='93 Silver Trails Rd.', address_2='')
    copeland_concrete = Company(company_name='Copeland Concrete, Inc.', address='28803 Hwy. 6', address_2='')
    crm_concrete = Company(company_name='CRM Concrete, Inc.', address='922 - 20 Road', address_2='')
    cutting_edge_concrete = Company(company_name='Cutting Edge Concrete Sawing', address='P.O. Box 40341', address_2='')
    dalco = Company(company_name='Dalco', address='3730 Salem Street', address_2='')
    eagle_valley_found = Company(company_name='Eagle Valley Foundations', address='189 Spring Creek Road', address_2='')
    ecs_corp = Company(company_name='ECS Corporation', address='2678 Hwy. 50', address_2='')
    fitzgerald_formliners = Company(company_name='Fitzgerald Formliners', address='1500 E. Chestnut Ave', address_2='')
    fruita_grand_junc_body = Company(company_name='Fruita Grand Junction Body & Paint, Inc.', address='', address_2='')
    gary_rinderle_construction = Company(company_name='Gary Rinderle Construction, Inc.', address='P.O. Box 1380', address_2='')
    gonzales_construction = Company(company_name='Gonzales Concrete Construction', address='960 - 20 1/2 Road', address_2='')
    hawxby_concrete = Company(company_name='Hawxby Concrete', address='103 Brown Road', address_2='')
    hcc_flooring = Company(company_name='HCC Flooring Solutions', address='715 N. Ventura Street', address_2='')
    high_con_inc = Company(company_name='High-Con, Inc.', address='100 Elk Run Drive', address_2='')
    highline_concrete_pumping = Company(company_name='Highline Concrete Pumping, LLC', address='P.O. Box 1022', address_2='')
    hooper_sons_concrete = Company(company_name='Hooper & Sons Concrete, Inc.', address='634 E. 250 N.', address_2='')
    k_g_rebar = Company(company_name='K & G Rebar, LLC', address='4491 - 5950 Road', address_2='')
    k_k_concrete = Company(company_name='K & K Concrete, Inc.', address='P.O. Box 578', address_2='')
    lawson_construction = Company(company_name='Lawson Construction', address='P.O. Box 1318', address_2='20 South Sun')
    lm_scofield_comp = Company(company_name='L.M Scofield Company', address='1710 East Mountain Sky Ave.', address_2='')
    lms_drilling = Company(company_name='LMS Drilling, Inc.', address='10420 E. 107th Place', address_2='')
    mm_concrete_construction = Company(company_name='M & M Concrete Construction, Inc.', address='384 - 27 1/2 Road', address_2='')
    mountain_concrete = Company(company_name='Mountain Concrete', address='615 Mountain View Road', address_2='')
    new_millennium_concrete = Company(company_name='New Millennium Concrete', address='237 Arroya Drive', address_2='')
    nimthor_inc = Company(company_name='Nimthor, Inc.', address='686 Industrial Boulevard', address_2='')
    octaform_systems = Company(company_name='Octaform Systems, Inc.', address='520 - 885 Dunsmuir Street', address_2='')
    preferred_denver = Company(company_name='Preferred Denver, LLC', address='7245 Gilpin Way, Suite 230', address_2='')
    r_r_concrete_pumping = Company(company_name='R & R Concrete Pumping, LLC', address='170 TX Trail', address_2='')
    rcd_construction = Company(company_name='R.C.D. Construction', address='P.O. Box 322', address_2='')
    reliance_precast = Company(company_name='Reliance Precast, LLC', address='4558 Grand View Blvd.', address_2='')
    r_c_concrete = Company(company_name='R & C Concrete, LLC', address='358 - 5th Street', address_2='')
    rms_concrete = Company(company_name='RMS Concrete', address='P.O. Box 670', address_2='6702 Hwy. 82')
    rodco_concrete = Company(company_name='Rodco Concrete, LLC', address='P.O. Box 304', address_2='')
    s2m_construction = Company(company_name='S2M Construction, Inc.', address='P.O. Box 1578', address_2='282 Center Drive')
    speedys_concrete = Company(company_name='Speedy\'s Concrete', address='135 Fedel Ct.', address_2='')
    star_precast_concrete = Company(company_name='Star Precast Concrete', address='1500 County Road 259', address_2='135 River Fro...?')
    stearns_construction = Company(company_name='Stearns Construction, Inc.', address='2746 Pebble Acres Drive', address_2='')
    straight_line_construction = Company(company_name='Straight Line Construction Co.', address='94 N. Mission Drive', address_2='')
    summit_concrete = Company(company_name='Summit Concrete', address='', address_2='')
    surevoid_products = Company(company_name='SureVoid Products, Inc.', address='1895 W. Dartmouth Ave.', address_2='')
    t_c_concrete = Company(company_name='T & C Concrete', address='P.O. Box 126', address_2='')
    tdm_concrete = Company(company_name='TDM Concrete', address='1277 Satitarius Street', address_2='')
    tennant_company = Company(company_name='Tennant Company - Architectural Coatings', address='1311 Beverly Green Drive', address_2='')
    williams_industrial_coat = Company(company_name='Williams Industrial Coatings, LLC', address='524 Garnet Drive', address_2='')
    zaabadick_construction = Company(company_name='Zaabadick Construction', address='710 Sierra Vista Way', address_2='')


    list_3 = [a_s_sandblasting, accurate_concrete, ach_foam_tech, adcock_concrete, advanced_concrete_co, aleman_concrete, architectural_concrete, arco_concrete, bear_concrete, brundage_bone_concrete, beyond_your_ordinary, burner_construction, calco_concrete, carver_brothers, co_concrete, co_precast, concrete_equip_supply, concrete_floor_sys, concrete_sys, contracting_specialties, copeland_concrete, crm_concrete, cutting_edge_concrete, dalco, eagle_valley_found, ecs_corp, fitzgerald_formliners, fruita_grand_junc_body, gary_rinderle_construction, gonzales_construction, hawxby_concrete, hcc_flooring, high_con_inc, highline_concrete_pumping, hooper_sons_concrete, k_g_rebar, k_k_concrete, lawson_construction, lm_scofield_comp, lms_drilling, mm_concrete_construction, mountain_concrete, new_millennium_concrete, nimthor_inc, octaform_systems, preferred_denver, r_r_concrete_pumping, rcd_construction, reliance_precast, r_c_concrete, rms_concrete, rodco_concrete, s2m_construction, speedys_concrete, star_precast_concrete, stearns_construction, straight_line_construction, summit_concrete, surevoid_products, t_c_concrete, tdm_concrete, tennant_company, williams_industrial_coat, zaabadick_construction]


    # MASONRY
    allens_masonry = Company(company_name='Allen\'s Masonry Company', address='P.O. Box 69', address_2='')
    alpine_meadow_mason = Company(company_name='Alpine Meadow Masonry, Inc.', address='P.O. Box 197', address_2='')
    ammex_masonry = Company(company_name='Ammex Masonry, Inc.', address='P.O. Box 1272', address_2='')
    asco_masonry = Company(company_name='ASCO Masonry & Construction, LLC', address='2140 Broadway, #101', address_2='')
    berich_masonry = Company(company_name='Berich Masonry Mountain Division', address='P.O. Box 3207', address_2='')
    bg_harrison_mason = Company(company_name='B.G. Harrison Masonry, Inc.', address='389 Roberts Court', address_2='')
    brickstone_inc = Company(company_name='Brickstone, Inc.', address='17921 West 77th Drive', address_2='')


    list_4 = [allens_masonry, alpine_meadow_mason, ammex_masonry, asco_masonry, berich_masonry, bg_harrison_mason, brickstone_inc]


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
