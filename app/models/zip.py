from .db import db, environment, SCHEMA, add_prefix_for_prod


class Zip(db.Model):
    __tablename__ = 'zips'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    zip_code = db.Column(db.String(5), nullable=False, unique=True)

    entries = db.relationship('Entry', back_populates='zip')

    def to_dict(self):
        return {
            'id': self.id,
            'zip_code': self.zip_code
        }
