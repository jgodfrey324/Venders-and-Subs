from .db import db, environment, SCHEMA, add_prefix_for_prod
from .entry_sub_category import entry_sub_category


class Entry(db.Model):
    __tablename__ = 'entries'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(12), nullable=False)
    cell_number = db.Column(db.String(12))
    fax_number = db.Column(db.String(12))
    email = db.Column(db.String(200))
    note = db.Column(db.String(255))
    company_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('companies.id')))
    city_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('cities.id')))
    state_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('states.id')))
    zip_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('zips.id')))
    list_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('lists.id')), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='entries')
    category = db.relationship('Category', back_populates='entries')
    list = db.relationship('List', back_populates='entries')
    sub_categories = db.relationship('SubCategory', secondary=entry_sub_category, back_populates='entries')
    zip = db.relationship('Zip', back_populates='entries')
    state = db.relationship('State', back_populates='entries')
    city = db.relationship('City', back_populates='entries')
    company = db.relationship('Company', back_populates='entries')


    def __repr__(self):
        return f'<{self.user.first_name} {self.user.last_name} made a/n {self.category.category} entry with the contact {self.first_name} {self.last_name}.>'


    def to_dict(self):
        return {
            'id': self.id,
            'user': {
                'id': self.user.id,
                'first_name': self.user.first_name,
                'last_name': self.user.last_name,
                'email': self.user.email
            },
            'contact': {
                'first_name': self.first_name,
                'last_name': self.last_name,
                'phone_number': self.phone_number,
                'cell_number': self.cell_number,
                'fax_number': self.fax_number,
                'email': self.email
            },
            'list': self.list.list,
            'sub_categories': [item.sub_category for item in self.sub_categories],
            'location': {
                'city': self.city.city,
                'state': self.state.state,
                'zip': self.zip.zip_code
            },
            'company': {
                'company_name': self.company.company_name,
                'address': self.company.address,
                'address_2': self.company.address_2
            },
            'category': self.category.category,
            'notes': self.note
        }
