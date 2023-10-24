from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .zips import seed_zips, undo_zips
from .cities import seed_cities, undo_cities
from .states import seed_states, undo_states
from .lists import seed_lists, undo_lists
from .sub_categories import seed_sub_categories, undo_sub_categories
from .companies import seed_companies, undo_companies
from .entries import seed_entries, undo_entries
from .entries_sub_categories import seed_entries_sub_categories, undo_seed_entries_sub_categories

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
    seed_users()
    # Add other seed functions here
    seed_categories()
    seed_zips()
    seed_cities()
    seed_states()
    seed_lists()
    seed_sub_categories()
    seed_companies()
    seed_entries()
    seed_entries_sub_categories()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_categories()
    undo_zips()
    undo_cities()
    undo_states()
    undo_lists()
    undo_sub_categories()
    undo_companies()
    undo_entries()
    undo_seed_entries_sub_categories()
