from .db import db, environment, SCHEMA, add_prefix_for_prod


class Contact(db.Model):
    __tablename__ = 'contacts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(10))
    cell_number = db.Column(db.String(10), nullable=False)
    fax_number = db.Column(db.String(10))
    email = db.Column(db.String(200), unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone_number': self.phone_number,
            'cell_number': self.cell_number,
            'fax_number': self.fax_number,
            'email': self.email
        }
