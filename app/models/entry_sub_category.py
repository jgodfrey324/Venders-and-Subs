from .db import db, environment, SCHEMA, add_prefix_for_prod


entry_sub_category = db.Table(
    'entries_sub_categories',
    db.Column(
        'entry_id',
        db.Integer,
        db.ForeignKey(add_prefix_for_prod('entries.id')),
        primary_key=True
    ),
    db.Column(
        'sub_category_id',
        db.Integer,
        db.ForeignKey(add_prefix_for_prod('sub_categories.id')),
        primary_key=True
    )
)


if environment == 'production':
    entry_sub_category.schema = SCHEMA
