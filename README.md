# Simple AI Chat System

A lightweight chat interface that interacts with OpenAI's GPT-3.5 model. Built with Flask and React.

## Prerequisites

- Python 3.8 or higher
- OpenAI API key

## Installation

1. Clone this repository:
git clone https://github.com/Calvin404/chat_system
cd chat-system

2. Create and activate a virtual environment:

# Windows
python -m venv venv  
venv\Scripts\activate

# MacOS/Linux
python -m venv venv  
source venv/bin/activate

3. Install required packages:
pip install -r requirements.txt

## Setting up OpenAI API Key
Get your API key from OpenAI's platform
Create a .env file in the project root with the following:
OPENAI_API_KEY=your_api_key_here
and replace 'your_api_key_here' with your actual OpenAI API Key.

## Running the Application
Ensure virtual environment is activated 
Start the Flask server using: python app.py
Open your web browser and navigate to http://localhost:5000
you should now be able to see the user interface and be able to ask it questions.
