from app.models import db, entry_sub_category, environment, SCHEMA
from sqlalchemy.sql import text, insert


# Adds a demo user, you can add other users here if you want
def seed_entries_sub_categories():
    entries_sub_categories_list = [
        {'entry_id': 1, 'sub_category_id': 1},
        {'entry_id': 2, 'sub_category_id': 2},
        {'entry_id': 3, 'sub_category_id': 6},
        {'entry_id': 4, 'sub_category_id': 3},
        {'entry_id': 4, 'sub_category_id': 17},
        {'entry_id': 5, 'sub_category_id': 1},
        {'entry_id': 6, 'sub_category_id': 4},
        {'entry_id': 7, 'sub_category_id': 5},
        {'entry_id': 8, 'sub_category_id': 6},
        {'entry_id': 9, 'sub_category_id': 1},
        {'entry_id': 10, 'sub_category_id': 7},
    ]

    for entry in entries_sub_categories_list:
        entry_id = entry['entry_id']
        sub_category_id = entry['sub_category_id']

        relationship = insert(entry_sub_category).values(entry_id = entry_id, sub_category_id = sub_category_id)
        db.session.execute(relationship)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_seed_entries_sub_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.entries_sub_categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM entries_sub_categories"))

    db.session.commit()
