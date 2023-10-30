from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


# def user_exists(form, field):
#     # Checking if user exists
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if not user:
#         raise ValidationError('Email provided not found.')


# def password_matches(form, field):
#     # Checking if password matches
#     password = field.data
#     email = form.data['email']
#     user = User.query.filter(User.email == email).first()
#     if not user:
#         raise ValidationError('No such user exists.')
#     if not user.check_password(password):
#         raise ValidationError('Password was incorrect.')


class EntryForm(FlaskForm):
    category = StringField('category')
    company = StringField('company')
    contact_name = StringField('contact_name')
    primary_phone = StringField('primary_phone')
    secondary_phone = StringField('secondary_phone')
    email = StringField('email')
    fax_number = StringField('fax_number')
    primary_address = StringField('primary_address')
    secondary_address = StringField('secondary_address')
    city = StringField('city')
    state = StringField('state')
    zip = StringField('zip')
    note = TextAreaField('note')
    submit = SubmitField('submit')
