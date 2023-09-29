from .db import db, environment, SCHEMA, add_prefix_for_prod


class Entry(db.Model):
    __tablename__ = 'entries'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer)
    city_id = db.Column(db.Integer)
    state_id = db.Column(db.Integer)
    zip_id = db.Column(db.Integer)
    contact_id = db.Column(db.Integer)
    description_id = db.Column(db.Integer)
    list_id = db.Column(db.Integer)
    category_id = db.Column(db.Integer)

    def to_dict(self):
        return {
            'id': self.id
        }
