from flask import jsonify # type: ignore

def response_message(message, status=400):
    return jsonify({"message": message}), status