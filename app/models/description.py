from .db import db, environment, SCHEMA, add_prefix_for_prod


class Description(db.Model):
    __tablename__ = 'descriptions'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255))

    entries = db.relationship('Entry', back_populates='description')

    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description
        }
