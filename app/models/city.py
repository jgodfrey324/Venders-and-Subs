from .db import db, environment, SCHEMA, add_prefix_for_prod


class City(db.Model):
    __tablename__ = 'cities'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(20), nullable=False, unique=True)

    entries = db.relationship('Entry', back_populates='city')

    def to_dict(self):
        return {
            'id': self.id,
            'city': self.city
        }
