from flask import Flask, jsonify
from firebase.service import get_firestore_data

app = Flask(__name__)

@app.route('/get_data')
def get_data():
    try:
        data = get_firestore_data('user')
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
