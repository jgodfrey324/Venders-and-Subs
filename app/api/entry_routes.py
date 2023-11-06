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

    request_body = request.get_json()['entry']


    contact_name = request_body['contactName'].split(' ')

    company = Company.query.filter(Company.company_name.ilike(f'{request_body["company"]}')).first()
    new_company = False
    ###
    if company:
        company = company.to_dict()
    ###
    else:
        new_company = Company(
            company_name = request_body['company'],
            address = request_body['primaryAddress'],
            address_2 = request_body['secondaryAddress']
        )
        db.session.add(new_company)
        db.session.commit()
    ###
    if new_company:
        new_company = Company.query.filter_by(company_name=request_body['company']).first().to_dict()
    ###


    city = City.query.filter(City.city.ilike(f'{request_body["city"]}')).first()
    new_city = False
    if city:
        city = city.to_dict()
    else:
        new_city = City(
            city = request_body['city']
        )
        db.session.add(new_city)
        db.session.commit()
    if new_city:
        new_city = City.query.filter_by(city=request_body['city']).first().to_dict()



    state = State.query.filter(State.state.ilike(f'{request_body["state"]}')).first()
    new_state = False
    if state:
        state = state.to_dict()
    else:
        new_state = State(
            state = request_body['state']
        )
        db.session.add(new_state)
        db.session.commit()
    if new_state:
        new_state = State.query.filter_by(state=request_body['state']).first().to_dict()



    old_zip = Zip.query.filter_by(zip_code=request_body['zip']).first()
    new_zip = False
    if old_zip:
        old_zip = old_zip.to_dict()
    else:
        new_zip = Zip(
            zip_code = request_body['zip']
        )
        db.session.add(new_zip)
        db.session.commit()
    if new_zip:
        new_zip = Zip.query.filter_by(zip_code=request_body['zip']).first().to_dict()


    category = Category.query.filter_by(category=request_body['category']).first().to_dict()

    user = current_user.to_dict()

    result = Entry(
        first_name = contact_name[0],
        last_name = contact_name[1],
        phone_number = request_body['primaryPhone'],
        cell_number = request_body['secondaryPhone'],
        fax_number = request_body['faxNumber'],
        email = request_body['email'],
        note = request_body['note'],
        company_id = (new_company['id'] if new_company else company['id']),
        city_id = (new_city['id'] if new_city else city['id']),
        state_id = (new_state['id'] if new_state else state['id']),
        zip_id = (new_zip['id'] if new_zip else old_zip['id']),
        list_id = 1,
        category_id = category['id'],
        user_id = user['id']
    )

    db.session.add(result)
    db.session.commit()

    return result.to_dict()
