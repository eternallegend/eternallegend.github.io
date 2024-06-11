from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import requests

app = Flask(__name__)
CORS(app)  # Adiciona suporte CORS

VISIONBOT_API_BASE_URL = "https://visionbot.ru/apiv2"

@app.route('/get_languages', methods=['GET'])
def get_languages():
    response = requests.get(f"{VISIONBOT_API_BASE_URL}/get_languages.php")
    return jsonify(response.json())

def prepare_image_data(request):
    data = request.form.to_dict()

    if 'file' in request.files:
        files = {'file': request.files['file']}
        return data, files
    elif 'body' in data:
        headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
        return data, headers
    elif 'url' in data:
        return data, None
    else:
        raise ValueError("No valid image data provided")

@app.route('/in', methods=['POST'])
def upload_image():
    try:
        data, extra = prepare_image_data(request)

        if extra and isinstance(extra, dict) and 'file' in extra:
            response = requests.post(f"{VISIONBOT_API_BASE_URL}/in.php", files=extra, data=data)
        elif extra and isinstance(extra, dict):
            response = requests.post(f"{VISIONBOT_API_BASE_URL}/in.php", data=data, headers=extra)
        else:
            response = requests.post(f"{VISIONBOT_API_BASE_URL}/in.php", data=data)

        return jsonify(response.json())

    except ValueError as e:
        return jsonify({"status": "error", "message": str(e)}), 400

@app.route('/res', methods=['GET'])
def get_result():
    if 'id' not in request.args:
        return jsonify({"status": "error", "message": "ID parameter is required"}), 400

    id_param = request.args['id']
    response = requests.get(f"{VISIONBOT_API_BASE_URL}/res.php?id={id_param}")
    return jsonify(response.json())

@app.route('/status', methods=['GET'])
def check_status():
    if 'id' not in request.args:
        return jsonify({"status": "error", "message": "ID parameter is required"}), 400

    id_param = request.args['id']
    response = requests.get(f"{VISIONBOT_API_BASE_URL}/res.php?id={id_param}")
    status = response.json().get('status')

    return jsonify({"status": status, "id": id_param})

@app.route('/delete', methods=['DELETE'])
def delete_request():
    if 'id' not in request.args:
        return jsonify({"status": "error", "message": "ID parameter is required"}), 400

    id_param = request.args['id']
    response = requests.delete(f"{VISIONBOT_API_BASE_URL}/res.php?id={id_param}")

    if response.status_code == 200:
        return jsonify({"status": "ok", "message": "Request deleted"})
    else:
        return jsonify({"status": "error", "message": "Failed to delete request"}), response.status_code

if __name__ == '__main__':
    app.run(debug=False)
