#!/usr/bin/env python3
"""
Create a get_locale function with the babel.localeselector decorator. Use
request.accept_languages to determine the best match with our supported
languages.
"""


from flask import Flask, render_template, request
from flask_babel import Babel


app = Flask(__name__)
babel = Babel(app)


class Config:
    """Config class for app"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)


@babel.localeselector
def get_locale():
    """Get locale from request"""
    return request.accept_languages.best_match(app.config['LANGUAGES'])
