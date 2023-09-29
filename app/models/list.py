from .db import db, environment, SCHEMA, add_prefix_for_prod


class List(db.Model):
    __tablename__ = 'lists'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    list = db.Column(db.Integer, nullable=False, unique=True)

    entries = db.relationship('Entry', back_populates='list')

    def to_dict(self):
        return {
            'id': self.id,
            'list': self.list
        }
