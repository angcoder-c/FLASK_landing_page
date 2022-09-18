from flask import Flask 

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static')
    
    from .public import public
    app.register_blueprint(public)

    return app
