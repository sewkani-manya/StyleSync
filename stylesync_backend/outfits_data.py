def get_outfit_recommendations(mood, weather, time_of_day):
    if mood == "happy" and weather == "sunny":
        return [
            {"name": "Floral Dress", "image": "https://i.imgur.com/fzLkR.png", "desc": "Light and breezy"},
            {"name": "Shorts & Tee", "image": "https://i.imgur.com/xqAKK.png", "desc": "Perfect for a sunny day"},
        ]
    elif mood == "tired" and weather == "rainy":
        return [
            {"name": "Comfy Hoodie", "image": "https://i.imgur.com/fxyZs.png", "desc": "Stay warm and chill"},
            {"name": "Oversized Sweater", "image": "https://i.imgur.com/rs3aS.png", "desc": "Cozy and casual"},
        ]
    elif mood == "excited" and weather == "cold":
        return [
            {"name": "Leather Jacket", "image": "https://i.imgur.com/xyAQT.png", "desc": "Edgy and warm"},
            {"name": "Boots & Scarf", "image": "https://i.imgur.com/xsdAQ.png", "desc": "Stay cozy and stylish"},
        ]
    elif mood == "relaxed" and weather == "cloudy":
        return [
            {"name": "Sweatpants & Hoodie", "image": "https://i.imgur.com/fxyZs.png", "desc": "Comfort first"},
            {"name": "Cardigan & Jeans", "image": "https://i.imgur.com/rs3aS.png", "desc": "Casual and neat"},
        ]
    else:
        return [
            {"name": "Jeans & Jacket", "image": "https://i.imgur.com/xsdAQ.png", "desc": "Always a classic combo"},
            {"name": "Layered Fit", "image": "https://i.imgur.com/xyAQT.png", "desc": "Stylish and versatile"},
        ]
