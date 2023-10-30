from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Entry, User, Category, SubCategory, Company, City, State, Zip
from forms.entry_form import EntryForm

entry_routes = Blueprint('entries', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
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

    form = EntryForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        contact_name = form.data['contact_name'].split(' ')

        company = Company.query.filter_by(company_name=form.data['company'])
        newCompany = False
        if not company:
            newCompany = Company(
                company_name = form.data['company'],
                address = form.data['primary_address'],
                address_2 = form.data['secondary_address']
            )
            db.session.add(newCompany)
            db.session.commit()

        city = City.query.filter_by(city=form.data['city'])
        newCity = False
        if not city:
            newCity = City(
                city = form.data['city']
            )

            db.session.add(newCity)
            db.session.commit()

        state = State.query.filter_by(state=form.data['state'])
        newState = False
        if not state:
            newState = State(
                state = form.data['state']
            )
            db.session.add(newState)
            db.session.commit()

        old_zip = Zip.query.filter_by(zip_code=form.data['zip'])
        newZip = False
        if not zip:
            newZip = Zip(
                zip_code = form.data['zip']
            )
            db.session.add(newZip)
            db.session.commit()

        category = Category.query.filter_by(category=form.data['category'])

        result = Entry(
            first_name = contact_name[0],
            last_name = contact_name[1],
            phone_number = form.data['primary_phone'],
            cell_number = form.data['secondary_phone'],
            fax_number = form.data['fax_number'],
            email = form.data['email'],
            note = form.data['note'],
            company_id = (company.id if company else newCompany.id),
            city_id = (city.id if city else newCity.id),
            state_id = (state.id if state else newState.id),
            zip_id = (old_zip.id if old_zip else newZip.id),
            list_id = 1,
            category_id = category.id,
            user_id = current_user.id
        )

        db.session.add(result)
        db.session.commit()

        print("💖 💖", result.to_dict())

        return result.to_dict()

    if form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
