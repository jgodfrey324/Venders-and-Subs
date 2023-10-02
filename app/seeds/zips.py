from app.models import db, Zip, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_zips():

    grand_junc_1 = Zip(zip_code='81504')
    grand_junc_2 = Zip(zip_code='81505')
    grand_junc_3 = Zip(zip_code='81502')
    grand_junc_4 = Zip(zip_code='81507')
    grand_junc_5 = Zip(zip_code='81503')
    grand_junc_6 = Zip(zip_code='81506')
    grand_junc_7 = Zip(zip_code='81501')

    carbondale = Zip(zip_code='81623')

    loma = Zip(zip_code='81524')

    rifle_1 = Zip(zip_code='81650')
    rifle_2 = Zip(zip_code='81651')

    montrose_1 = Zip(zip_code='81401')
    montrose_2 = Zip(zip_code='81402')
    montrose_3 = Zip(zip_code='81403')

    silt = Zip(zip_code='81652')

    nucla = Zip(zip_code='81424')

    union_grove = Zip(zip_code='53182')

    delta_1 = Zip(zip_code='81416')
    delta_2 = Zip(zip_code='81406')

    silverthorne = Zip(zip_code='80498')

    lincoln_1 = Zip(zip_code='68521')
    lincoln_2 = Zip(zip_code='68508')

    new_castle = Zip(zip_code='81647')

    craig = Zip(zip_code='81625')

    commerce_city_1 = Zip(zip_code='80022')
    commerce_city_2 = Zip(zip_code='80037')

    centennial_1 = Zip(zip_code='80112')
    centennial_2 = Zip(zip_code='80015')

    spokane = Zip(zip_code='99220')

    clifton = Zip(zip_code='81520')

    denver_1 = Zip(zip_code='80204')
    denver_2 = Zip(zip_code='80227')
    denver_3 = Zip(zip_code='80231')
    denver_4 = Zip(zip_code='80221')
    denver_5 = Zip(zip_code='80216')
    denver_6 = Zip(zip_code='80239')
    denver_7 = Zip(zip_code='80224')
    denver_8 = Zip(zip_code='80222')
    denver_9 = Zip(zip_code='80223')
    denver_10 = Zip(zip_code='80220')
    denver_11 = Zip(zip_code='80205')
    denver_12 = Zip(zip_code='80211')
    denver_13 = Zip(zip_code='80238')
    denver_14 = Zip(zip_code='80217')
    denver_15 = Zip(zip_code='80219')

    hotchkiss = Zip(zip_code='81419')

    olathe = Zip(zip_code='81425')

    steamboat_springs_1 = Zip(zip_code='80477')
    steamboat_springs_2 = Zip(zip_code='80487')
    steamboat_springs_3 = Zip(zip_code='80488')

    glenwood_springs_1 = Zip(zip_code='81601')
    glenwood_springs_2 = Zip(zip_code='81602')

    telluride = Zip(zip_code='81435')

    golden = Zip(zip_code='80401')

    thornton = Zip(zip_code='80229')

    panama_city = Zip(zip_code='32401')

    fruita = Zip(zip_code='81521')

    gladstone = Zip(zip_code='64119')

    vernal_1 = Zip(zip_code='84078')
    vernal_2 = Zip(zip_code='84741')

    gunnison = Zip(zip_code='81230')

    ridgeway = Zip(zip_code='81432')

    pueblo_west = Zip(zip_code='81007')

    windsor = Zip(zip_code='80550')

    kalama = Zip(zip_code='98625')

    empire = Zip(zip_code='80438')

    highlands_ranch_1 = Zip(zip_code='80126')
    highlands_ranch_2 = Zip(zip_code='80129')

    aurora_1 = Zip(zip_code='80011')
    aurora_2 = Zip(zip_code='80013')
    aurora_3 = Zip(zip_code='80016')
    aurora_4 = Zip(zip_code='80010')
    aurora_5 = Zip(zip_code='80014')
    aurora_6 = Zip(zip_code='80012')

    paonia = Zip(zip_code='81428')

    aspen = Zip(zip_code='81612')

    mesa = Zip(zip_code='81643')

    myron = Zip(zip_code='84052')

    buffdale = Zip(zip_code='84065')

    parachute = Zip(zip_code='81635')

    frisco = Zip(zip_code='80443')

    kremmling = Zip(zip_code='80459')

    breckenridge = Zip(zip_code='80424')

    palisade = Zip(zip_code='81526')

    parker_1 = Zip(zip_code='80134')
    parker_2 = Zip(zip_code='80138')

    colorado_springs_1 = Zip(zip_code='80907')
    colorado_springs_2 = Zip(zip_code='80920')
    colorado_springs_3 = Zip(zip_code='80915')
    colorado_springs_4 = Zip(zip_code='80906')
    colorado_springs_5 = Zip(zip_code='80903')
    colorado_springs_6 = Zip(zip_code='80909')
    colorado_springs_7 = Zip(zip_code='80921')
    colorado_springs_8 = Zip(zip_code='80925')

    hayden = Zip(zip_code='81639')

    basalt = Zip(zip_code='81621')

    idaho_springs = Zip(zip_code='80452')

    farmington = Zip(zip_code='87499')

    roosevelt = Zip(zip_code='84066')

    frederick_1 = Zip(zip_code='80516')
    frederick_2 = Zip(zip_code='80530')

    norwood = Zip(zip_code='81423')

    ft_lupton = Zip(zip_code='80621')

    fort_collins_1 = Zip(zip_code='80526')
    fort_collins_2 = Zip(zip_code='80528')
    fort_collins_3 = Zip(zip_code='80524')
    fort_collins_4 = Zip(zip_code='80525')

    st_augustine = Zip(zip_code='32095')

    eagle = Zip(zip_code='81631')

    loveland_1 = Zip(zip_code='80537')
    loveland_2 = Zip(zip_code='80539')
    loveland_3 = Zip(zip_code='80538')

    englewood = Zip(zip_code='80110')

    durango_1 = Zip(zip_code='81301')
    durango_2 = Zip(zip_code='81302')
    durango_3 = Zip(zip_code='81303')

    santa_ana = Zip(zip_code='92701')

    gypsum = Zip(zip_code='81637')

    longmont_1 = Zip(zip_code='80502')
    longmont_2 = Zip(zip_code='80504')

    phoenix_1 = Zip(zip_code='85048')
    phoenix_2 = Zip(zip_code='85044')

    brighton_1 = Zip(zip_code='80601')
    brighton_2 = Zip(zip_code='80603')

    dacono = Zip(zip_code='80514')

    ouray = Zip(zip_code='81427')

    los_angelas = Zip(zip_code='90035')

    wolcott = Zip(zip_code='81656')

    arvada_1 = Zip(zip_code='80007')
    arvada_2 = Zip(zip_code='80002')
    arvada_3 = Zip(zip_code='80403')

    littleton_1 = Zip(zip_code='80125')
    littleton_2 = Zip(zip_code='80160')
    littleton_3 = Zip(zip_code='80120')
    littleton_4 = Zip(zip_code='80123')

    dove_creek = Zip(zip_code='81324')

    lindon = Zip(zip_code='84042')

    scottsbluff = Zip(zip_code='69361')

    oklahoma_city = Zip(zip_code='73179')

    wood_dale = Zip(zip_code='60191')

    columbus = Zip(zip_code='68601')

    herber_city = Zip(zip_code='84032')

    grand_island = Zip(zip_code='68802')

    austin = Zip(zip_code='81410')

    cumming = Zip(zip_code='30041')

    johnstown = Zip(zip_code='80634')

    san_diego_1 = Zip(zip_code='92121')
    san_diego_2 = Zip(zip_code='92113')

    stafford = Zip(zip_code='77497')

    bogart = Zip(zip_code='30622')

    de_beque = Zip(zip_code='81630')

    modesto = Zip(zip_code='95358')

    lehi = Zip(zip_code='84043')

    champlain = Zip(zip_code='12919')

    delray_beach = Zip(zip_code='33445')

    san_francisco = Zip(zip_code='94103')

    draper = Zip(zip_code='84020')

    wheat_ridge = Zip(zip_code='80033')

    yoder = Zip(zip_code='80864')

    cheyenne = Zip(zip_code='82007')

    caldwell = Zip(zip_code='83606')

    moroni = Zip(zip_code='84646')

    cave_creek = Zip(zip_code='85331')

    salt_lake_city_1 = Zip(zip_code='84102')
    salt_lake_city_2 = Zip(zip_code='84044')
    salt_lake_city_3 = Zip(zip_code='84171')
    salt_lake_city_4 = Zip(zip_code='84119')
    salt_lake_city_5 = Zip(zip_code='84107')
    salt_lake_city_6 = Zip(zip_code='84115')
    salt_lake_city_7 = Zip(zip_code='84101')

    tarzana = Zip(zip_code='91356')

    denton = Zip(zip_code='76208')

    castle_rock_1 = Zip(zip_code='80104')
    castle_rock_2 = Zip(zip_code='80109')

    fargo = Zip(zip_code='59102')

    kansas_city = Zip(zip_code='64171')

    hildale = Zip(zip_code='84784')

    collbran = Zip(zip_code='81624')

    lakewood_1 = Zip(zip_code='80215')
    lakewood_2 = Zip(zip_code='80214')
    lakewood_3 = Zip(zip_code='80235')

    avon = Zip(zip_code='81620')


    list = [grand_junc_1, grand_junc_2, grand_junc_3, grand_junc_4, grand_junc_5, grand_junc_6, grand_junc_7, carbondale, loma, rifle_1, rifle_2, montrose_1, montrose_2, montrose_3, silt, nucla, union_grove, delta_1, delta_2, silverthorne, lincoln_1, lincoln_2, new_castle, craig, commerce_city_1, commerce_city_2, centennial_1, centennial_2, spokane, clifton, denver_1, denver_2, denver_3, denver_4, denver_5, denver_6, denver_7, denver_8, denver_9, denver_10, denver_11, denver_12, denver_13, denver_14, denver_15, hotchkiss, olathe, steamboat_springs_1, steamboat_springs_2, steamboat_springs_3, glenwood_springs_1, glenwood_springs_2, telluride, golden, thornton, panama_city, fruita, gladstone, vernal_1, vernal_2, gunnison, ridgeway, pueblo_west, windsor, kalama, empire, highlands_ranch_1, highlands_ranch_2, aurora_1, aurora_2, aurora_3, aurora_4, aurora_5, aurora_6, paonia, aspen, mesa, myron, buffdale, parachute, frisco, kremmling, breckenridge, palisade, parker_1, parker_2, colorado_springs_1, colorado_springs_2, colorado_springs_3, colorado_springs_4, colorado_springs_5, colorado_springs_6, colorado_springs_7, colorado_springs_8, hayden, basalt, idaho_springs, farmington, roosevelt, frederick_1, frederick_2, norwood, ft_lupton, fort_collins_1, fort_collins_2, fort_collins_3, fort_collins_4, st_augustine, eagle, loveland_1, loveland_2, loveland_3, englewood, durango_1, durango_2, durango_3, santa_ana, gypsum, longmont_1, longmont_2, phoenix_1, phoenix_2, brighton_1, brighton_2, dacono, ouray, los_angelas, wolcott, arvada_1, arvada_2, arvada_3, littleton_1, littleton_2, littleton_3, littleton_4, dove_creek, lindon, scottsbluff, oklahoma_city, wood_dale, columbus, herber_city, grand_island, austin, cumming, johnstown, san_diego_1, san_diego_2, stafford, bogart, de_beque, modesto, lehi, champlain, delray_beach, san_francisco, draper, wheat_ridge, yoder, cheyenne, caldwell, moroni, cave_creek, salt_lake_city_1, salt_lake_city_2, salt_lake_city_3, salt_lake_city_4, salt_lake_city_5, salt_lake_city_6, salt_lake_city_7, tarzana, denton, castle_rock_1, castle_rock_2, fargo, kansas_city, hildale, collbran, lakewood_1, lakewood_2, lakewood_3, avon]

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_zips():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.zips RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM zips"))

    db.session.commit()
