from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Entry


search_routes = Blueprint('search', __name__)



@search_routes.route('/', methods=["POST"])
# @login_required
def search_results():
    # request_body = request.get_json()['search']

    # print('request body 💖 --> ', request_body)

    entries = Entry.query.all()

    # returning all entries flattened
    results = {}
    for entry in entries:
        new_entry = entry.to_dict()
        results[new_entry['id']] = new_entry

    return results
