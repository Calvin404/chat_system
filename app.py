from flask import Flask, request, jsonify, render_template
from config import Config
from openai import OpenAI
import httpx

# Initialize Flask application
app = Flask(__name__)
app.config.from_object(Config)

# Initialize OpenAI client with API key from config
# Using httpx.Client() for better request handling
client = OpenAI(
    api_key=app.config['OPENAI_API_KEY'],
    http_client=httpx.Client()
)

# Route to serve the main application page
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint to handle chat requests
@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        # Get JSON data from request
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({'error': 'No message provided'}), 400

        # Call OpenAI API
        response = client.chat.completions.create(
            model="gpt-3.5-turbo", # cheap
            messages=[
                {"role": "user", "content": data['message']}
            ],
            max_tokens=150 # limits response length for quicker replies, can be easily changed
        )

        # Extract the response text
        reply = response.choices[0].message.content

        return jsonify({'response': reply})
    # Return any errors that happen
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)