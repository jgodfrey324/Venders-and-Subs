from app.models import db, State, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_states():

    colorado = State(state='Colorado')
    washington = State(state='Washington')
    wisonsin = State(state='Wisconsin')
    nebraska = State(state='Nebraska')
    florida = State(state='Florida')
    missouri = State(state='Missouri')
    utah = State(state='Utah')
    new_mexico = State(state='New Mexico')
    california = State(state='California')
    arizona = State(state='Arizona')
    oklahoma = State(state='Oklahoma')
    illinois = State(state='Illinois')
    georgia = State(state='Georgia')
    texas = State(state='Texas')
    new_york = State(state='New York')
    wyoming = State(state='Wyoming')
    idaho = State(state='Ihado')
    north_dakota = State(state='North Dakota')
    montana = State(state='Montana')
    michigan = State(state='Michigan')
    south_carolina = State(state='South Carolina')
    new_hampshire = State(state='New Hampshire')
    new_jersey = State(state='New Jersey')
    ohio = State(state='Ohio')
    minneasota = State(state='Minneasota')
    arkansas = State(state='Arkansas')
    maryland = State(state='Maryland')
    massachusetts = State(state='Massachusetts')
    rhode_island = State(state='Rhode Island')
    indiana = State(state='Indiana')

    list = [colorado, washington, wisonsin, nebraska, florida, missouri, utah, new_mexico, california, arizona, oklahoma, illinois, georgia, texas, new_york, wyoming, idaho, north_dakota, montana, michigan, south_carolina, new_hampshire, new_jersey, ohio, minneasota, arkansas, maryland, massachusetts, rhode_island, indiana]

    [db.session.add(item) for item in list]
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_states():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.states RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM states"))

    db.session.commit()
