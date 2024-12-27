import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    # Get OpenAI API key from environment variables
    # Will raise error if not found to catch missing key early
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    if not OPENAI_API_KEY:
        raise ValueError("No OpenAI API key found. Please set OPENAI_API_KEY environment variable.")