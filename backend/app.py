from flask import Flask, jsonify, request
from controller.search import get_levenshtein_distance_post
from controller.recommendation import get_title_recommendations
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/data', methods=['GET'])
def get_data():
    try:
        objs = [{"postTitle": "tes 123 wio"}, {"postTitle": "oiiii"}]
        data = get_levenshtein_distance_post("woi", objs)
        
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/search', methods=['POST'])
def handle_search():
    try:
        req_data = request.get_json()
        
        query = req_data.get('query')
        objects = req_data.get('objects', [])

        data = get_levenshtein_distance_post(query, objects)
        return jsonify(data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/recommendations', methods=['POST'])
def handle_recommendations():
    try:
        req_data = request.get_json()
        
        postTitle = req_data.get('postTitle')
        threads = req_data.get('threads', [])

        data = get_title_recommendations(postTitle, threads)
        return jsonify(data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)


