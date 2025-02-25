from flask import Flask
from flask import request, jsonify, Blueprint, make_response
from flask_cors import CORS
from src.utils.mongo_db import MongoDB
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://{{product_name}}.bixbites.com"}})
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
mongo_db = MongoDB()

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'No input data provided!'}), 400
    
    response = mongo_db.create_user(data)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
