import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from controller.search import get_levenshtein_distance_post
from controller.recommendation import get_title_recommendations

from controller.model import get_transcribed_text
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
        threads = req_data.get('threads', [])

        data = get_levenshtein_distance_post(query, threads)
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
    

@app.route('/transcribe', methods=['POST'])
def transcribe():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file part in request'}), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        

        audio_blob = file.read()
        audio_path = os.path.join('./','uploaded_audio.mp3')
        with open(audio_path, 'wb') as f:
            f.write(audio_blob)

        transcribed_text = get_transcribed_text(audio_path)
        # os.remove("./output_audio.wav")

        return jsonify({'transcription': transcribed_text})
    
    except Exception as e:
        print(str(e)) 
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)


