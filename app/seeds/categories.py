from app.models import db, Category, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_categories():
    general_conditions = Category(category='General Conditions')
    site_construction = Category(category='Site Construction')
    concrete = Category(category='Concrete')
    masonry = Category(category='Masonry')
    steel = Category(category='Steel')
    wood_plastics = Category(category='Wood & Plastics')
    thermal_moisture = Category(category='Thermal & Moisture Protection')
    doors_windows = Category(category='Doors & Windows')
    finishes = Category(category='Finishes')
    specialties = Category(category='Specialties')
    equipment = Category(category='Equipment')
    furnishings = Category(category='Furnishings')
    special_construction = Category(category='Special Construction')
    conveying_systems = Category(category='Conveying Systems')
    mechanical = Category(category='Mechanical')
    electrical = Category(category='Electrical')

    list = [general_conditions, site_construction, concrete, masonry, steel, wood_plastics, thermal_moisture, doors_windows, finishes, specialties, equipment, furnishings, special_construction, conveying_systems, mechanical, electrical]

    [db.session.add(item) for item in list]
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM categories"))

    db.session.commit()
