from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Entry, Company


search_routes = Blueprint('search', __name__)



@search_routes.route('/', methods=["POST"])
# @login_required
def search_results():
    # getting request body
    request_body = request.get_json()['search']

    # query for all entries
    entries = Entry.query.all()

    # if it's the initial load of search, give all entries
    if request_body == {}:
        # flattening entries
        results = {}
        for entry in entries:
            new_entry = entry.to_dict()
            results[new_entry['id']] = new_entry

        return results


    # breaking down request body...
    company = request_body['companyName'].lower()

    contact_name = request_body['contactName'].split(' ')
    first_name = contact_name[0]
    last_name = contact_name[1] if len(contact_name) > 1 else ''

    sub_cat = request_body['subCategory']

    category = request_body['category']


    # making functions to handle each of the filters
    def company_check(list):
        if company:
            matched_entries = Entry.query.join(Entry.company).filter(Company.company_name.ilike(f'{company}%')).all()

            if len(matched_entries) > 0:
                return matched_entries
        return list

    def first_name_check(list):
        if first_name:
            matched_entries = Entry.query.filter(Entry.first_name.ilike(f'{first_name}%')).all()

            if len(matched_entries) > 0:
                return matched_entries
        return list

    def last_name_check(list):
        if last_name:
            matched_entries = Entry.query.filter(Entry.last_name.ilike(f'{last_name}%')).all()

            if len(matched_entries) > 0:
                return matched_entries
        return list


    def category_check(entry):
        entry_obj = entry.to_dict()

        if not category:
            return True
        elif entry_obj['category'] == category:
            return True
        else:
            return False

    def sub_cat_check(entry):
        entry_obj = entry.to_dict()

        if len(sub_cat) == 0:
            return True
        elif len(sub_cat) > 0:
            for cat in sub_cat:
                if cat in entry_obj['sub_categories']:
                    return True
        else:
            return False


    # using filter function to join all these filters together
    filtered_by_company = company_check(entries)
    filtered_by_first_name = first_name_check(filtered_by_company)
    filtered_by_last_name = last_name_check(filtered_by_first_name)
    filtered_by_category = filter(category_check, list(filtered_by_last_name))
    filtered_by_sub_cat = filter(sub_cat_check, list(filtered_by_category))

    results = list(filtered_by_sub_cat)

    # flatten results
    return_obj = {}
    if len(results) > 0:
        for ele in results:
                new_ele = ele.to_dict()
                return_obj[new_ele['id']] = new_ele

    return return_obj
