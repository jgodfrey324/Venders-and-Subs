from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Entry, Company, Category


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

        contact_name = request_body['contactName'].split(' ')
        first_name = contact_name[0]
        last_name = contact_name[1] if len(contact_name) > 1 else ''

        sub_cat = request_body['subCategory']

        category = request_body['category']

        # grabbing all entries
        # entries = Entry.query.all()
        entries = []
        if company:
            entries = Entry.query.join(Entry.company).filter(Company.company_name.ilike(f'{company}%'))

        # if len(contact_name) > 0:
        #     entries = Entry.query.filter(Entry.first_name.ilike(f'{first_name}') | Entry.last_name.ilike(f'{first_name}') | Entry.first_name.ilike(f'{last_name}') | Entry.last_name.ilike(f'{first_name}'))

        if category:
            entries = Entry.query.join(Entry.category).filter(Category.category == category)

        # print('entries 💖 -> ', entries)

        # if len(sub_cat) > 0:
        #     entries = filter(entries.sub_categories, sub_cat)
        # entries = Entry.query.get(1)

        # print('entry company 💖 --> ', entries.company.company_name)

    # returning all entries flattened
    results = {}
    # to_dict()
    for entry in entries:
        new_entry = entry.to_dict()
        results[new_entry['id']] = new_entry

    return results
