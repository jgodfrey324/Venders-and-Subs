from app.models import db, Entry, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_entries():
    entry_1 = Entry(first_name='Carroll', last_name='Aamold', phone_number='970-216-0185', cell_number='', fax_number='', email='', note='', company_id=1, city_id=1, state_id=1, zip_id=1, list_id=1, category_id=1, user_id=4)

    entry_2 = Entry(first_name='Ronald', last_name='Gregis', phone_number='970-257-1155', cell_number='', fax_number='970-623-4219', email='gregis4@msn.com', note='', company_id=2, city_id=1, state_id=1, zip_id=2, list_id=1, category_id=1, user_id=4)

    entry_3 = Entry(first_name='null', last_name='null', phone_number='970-257-1652', cell_number='', fax_number='970-254-1715', email='', note='', company_id=3, city_id=1, state_id=1, zip_id=2, list_id=1, category_id=1, user_id=4)

    entry_4 = Entry(first_name='Mike', last_name='Lopez', phone_number='970-523-4784', cell_number='970-640-2686', fax_number='', email='areasbestmaint@gmail.com', note='Structural engineering', company_id=4, city_id=1, state_id=1, zip_id=1, list_id=1, category_id=1, user_id=4)

    entry_5 = Entry(first_name='Ruth', last_name='Miller', phone_number='970-255-6788', cell_number='', fax_number='970-208-3040', email='ruth@archesengineering.com', note='', company_id=5, city_id=1, state_id=1, zip_id=3, list_id=1, category_id=1, user_id=4)

    entry_6 = Entry(first_name='Rick', last_name='Stevens', phone_number='970-963-0377', cell_number='', fax_number='', email='rstevens@aspenearthmoving.com', note='', company_id=6, city_id=2, state_id=1, zip_id=8, list_id=1, category_id=1, user_id=4)

    entry_7 = Entry(first_name='Edward M.', last_name='Baltzer', phone_number='970-260-8468', cell_number='', fax_number='', email='ebaltzer@avantenvironmental.com', note='Environmental consultants', company_id=7, city_id=1, state_id=1, zip_id=4, list_id=1, category_id=1, user_id=4)

    entry_8 = Entry(first_name='Bill', last_name='Bailey', phone_number='970-434-9763', cell_number='', fax_number='', email='baileymover@gwestoffice.net', note='House moving', company_id=8, city_id=1, state_id=1, zip_id=5, list_id=1, category_id=1, user_id=4)

    entry_9 = Entry(first_name='Shawn', last_name='Brill', phone_number='970-241-8709', cell_number='', fax_number='970-241-9514', email='shawn@bighorneng.com', note='Mechanical engineering', company_id=9, city_id=1, state_id=1, zip_id=2, list_id=1, category_id=1, user_id=4)

    entry_10 = Entry(first_name='Jeff', last_name='Brady', phone_number='970-778-0645', cell_number='', fax_number='970-858-0647', email='', note='', company_id=10, city_id=3, state_id=1, zip_id=9, list_id=1, category_id=1, user_id=4)

    list = [entry_1, entry_2, entry_3, entry_4, entry_5, entry_6, entry_7, entry_8, entry_9, entry_10]

    [db.session.add(item) for item in list]
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_entries():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.entries RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM entries"))

    db.session.commit()
