from .db import db, environment, SCHEMA, add_prefix_for_prod


class State(db.Model):
    __tablename__ = 'states'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    state = db.Column(db.String(20), nullable=False, unique=True)

    entries = db.relationship('Entry', back_populates='state')

    def to_dict(self):
        return {
            'id': self.id,
            'state': self.state
        }
