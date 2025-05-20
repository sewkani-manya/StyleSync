from flask import Flask, request, jsonify
from flask_cors import CORS
from outfits_data import get_outfit_recommendations

app = Flask(__name__)
CORS(app)  # Allow frontend calls from different origin

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    mood = data.get("mood")
    weather = data.get("weather")
    time_of_day = data.get("timeOfDay")

    recommendations = get_outfit_recommendations(mood, weather, time_of_day)
    return jsonify({"outfits": recommendations})

if __name__ == "__main__":
    app.run(debug=True)
