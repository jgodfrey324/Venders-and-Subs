from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Entry, Company


search_routes = Blueprint('search', __name__)



@search_routes.route('/', methods=["POST"])
# @login_required
def search_results():
    request_body = request.get_json()['search']

    print('request body 💖 --> ', request_body)

    entries = []

    if request_body == {}:
        entries = Entry.query.all()

    else:
        company = request_body['companyName'].lower()
        company_ids = Company.query.filter(Company.company_name.ilike(f'%{company}%'))
        print('company names -> 💖', company_ids)

        contact_name = request_body['contactName'].split(' ')
        first_name = contact_name[0]
        last_name = contact_name[1] if len(contact_name) > 1 else ''

        sub_cat = request_body['subCategory']

        category = request_body['category'].lower()

        # grabbing all entries
        # entries = Entry.query.filter_by(company_ids = ).all()
        entries = Entry.query.get(1)

        # print('entry company 💖 --> ', entries.company.company_name)

    # returning all entries flattened
    results = {}
    # to_dict()
    for entry in entries:
        new_entry = entry.to_dict()
        results[new_entry['id']] = new_entry

    return results
