from .db import db, environment, SCHEMA, add_prefix_for_prod


class Company(db.Model):
    __tablename__ = 'companies'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(50), nullable=False, unique=True)
    address = db.Column(db.String(100))
    address_2 = db.Column(db.String(100))

    entries = db.relationship('Entry', back_populates='company')

    def to_dict(self):
        return {
            'id': self.id,
            'company_name': self.company_name,
            'address': self.address,
            'address_2': self.address_2
        }
