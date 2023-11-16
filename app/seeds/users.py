from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    morgan_woodward = User(
        first_name='Morgan', last_name='Woodward', email='morgan@fixturestudio.com', password='fsmorgan')
    jami_huber = User(
        first_name='Jami', last_name='Huber', email='jami@fixturestudio.com', password='fsjami')
    jeff_huber = User(
        first_name='Jeff', last_name='Huber', email='jeff@fixturestudio.com', password='fsjeff')
    jenna_godfrey = User(
        first_name='Jenna', last_name='Godfrey', email='jag@fixturestudio.com', password='fsjennag'
    )
    chad = User(
        first_name='Chad', last_name='Smith', email='chad@fixturestudio.com', password='jschad'
    )
    will = User(
        first_name='Will', last_name='Smith', email='will@fixturestudio.com', password='fswill'
    )
    vern = User(
        first_name='Vern', last_name='Smith', email='vern@fixturestudio.com', password='fsvern'
    )
    jackson = User(
        first_name='Jackson', last_name='Huber', email='jackson@fixturestudio.com', password='fsjackson'
    )
    jenna_smith = User(
        first_name='Jenna', last_name='Smith', email='jenna@fixturestudio.com', password='fsjenna'
    )
    erin_lutz = User(
        first_name='Erin', last_name='Lutz', email='erin@fixturestudio.com', password='jserin'
    )

    db.session.add(morgan_woodward)
    db.session.add(jami_huber)
    db.session.add(jeff_huber)
    db.session.add(jenna_godfrey)
    db.session.add(chad)
    db.session.add(will)
    db.session.add(vern)
    db.session.add(jackson)
    db.session.add(jenna_smith)
    db.session.add(erin_lutz)

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
