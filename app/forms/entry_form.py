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
    category_id = StringField('category_id', validators=[DataRequired()])
    company_id = StringField('company_id')
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    phone_number = StringField('phone_number', validators=[DataRequired()])
    cell_number = StringField('cell_number')
    email = StringField('email', validators=[Email()])
    fax_number = StringField('fax_number')
    city_id = StringField('city_id')
    state_id = StringField('state_id')
    zip_id = StringField('zip_id')
    note = TextAreaField('note')
    submit = SubmitField('submit')
