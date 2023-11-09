from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Entry


search_routes = Blueprint('search', __name__)



@search_routes.route('/')
# @login_required
def search_results():
    pass
