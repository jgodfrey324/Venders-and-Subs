from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Entry

entry_routes = Blueprint('entries', __name__)


@entry_routes.route('/')
# @login_required
def entries():
    """
    Query for all entries and returns them in a list of entry dictionaries
    """
    entries = Entry.query.all()

    results = {}
    for entry in entries:
        new_entry = entry.to_dict()
        results[new_entry['id']] = new_entry

    return results




@entry_routes.route('/<int:entryId>')
# @login_required
def one_entry(entryId):
    """
    Query for one entry and return the details of entry in dictionary
    """
    entry = Entry.query.get(entryId)

    return entry.to_dict()
