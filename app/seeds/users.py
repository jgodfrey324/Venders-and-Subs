from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    morgan_ = User(
        first_name='Morgan', last_name='Woodward', email='morgan@fixturestudio.com', password='password1')
    jami_huber = User(
        first_name='Jami', last_name='Huber', email='jami@fixturestudio.com', password='password2')
    jeff_huber = User(
        first_name='Jeff', last_name='Huber', email='jeff@fixturestudio.com', password='password3')
    jenna_godfrey = User(
        first_name='Jenna', last_name='Godfrey', email='jag@fixturestudio.com', password='password4'
    )

    db.session.add(morgan_)
    db.session.add(jami_huber)
    db.session.add(jeff_huber)
    db.session.add(jenna_godfrey)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
