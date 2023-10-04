from .db import db, environment, SCHEMA, add_prefix_for_prod


class SubCategory(db.Model):
    __tablename__ = 'sub_categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    sub_category = db.Column(db.String(50), nullable=False, unique=True)

    entries = db.relationship('Entry', secondary='entries', back_populates='sub_categories')

    def to_dict(self):
        return {
            'id': self.id,
            'sub_category': self.sub_category
        }
