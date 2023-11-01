from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Entry, User, Category, SubCategory, Company, City, State, Zip
from ..forms.entry_form import EntryForm

entry_routes = Blueprint('entries', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []

    print('error messages 💖', errorMessages)

    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


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




@entry_routes.route('/new', methods=["POST"])
# @login_required
def post_entries():
    """
    Posting new entry to list of entries and return new entry in dictionary
    """

    ###
    print('what is request looking like? 💖', request.get_json()['entry'])
    ###

    request_body = request.get_json()['entry']


    contact_name = request_body['contactName']

    company = Company.query.filter_by(company_name=request_body['company'])
    new_company = False
    if not company:
        new_company = Company(
            company_name = request_body['company'],
            address = request_body['primaryAddress'],
            address_2 = request_body['secondaryAddress']
        )
        db.session.add(new_company)
        db.session.commit()



    city = City.query.filter_by(city=request_body['city'])
    new_city = False
    if not city:
        new_city = City(
            city = request_body['city']
        )

        db.session.add(new_city)
        db.session.commit()



    state = State.query.filter_by(state=request_body['state'])
    new_state = False
    if not state:
        new_state = State(
            state = request_body['state']
        )
        db.session.add(new_state)
        db.session.commit()



    old_zip = Zip.query.filter_by(zip_code=request_body['zip'])
    new_zip = False
    if not zip:
        new_zip = Zip(
            zip_code = request_body['zip']
        )
        db.session.add(new_zip)
        db.session.commit()



    category = Category.query.filter_by(category=request_body['category'])



    result = Entry(
        first_name = contact_name[0],
        last_name = contact_name[1],
        phone_number = request_body['primaryPhone'],
        cell_number = request_body['secondaryPhone'],
        fax_number = request_body['faxNumber'],
        email = request_body['email'],
        note = request_body['note'],
        company_id = (new_company.id if new_company else company.id),
        city_id = (new_city.id if new_city else city.id),
        state_id = (new_state.id if new_state else state.id),
        zip_id = (new_zip.id if new_zip else old_zip.id),
        list_id = 1,
        category_id = category.id,
        user_id = current_user.id
    )

    db.session.add(result)
    db.session.commit()

    ###
    print("💖 💖", result.to_dict())
    ###

    return result.to_dict()
