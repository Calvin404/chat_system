// Main chat interface component
function ChatInterface() {
  // State management
  const [message, setMessage] = React.useState('');
  const [response, setResponse] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // Handle form submission and API call
  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!message.trim()) return;

      setIsLoading(true);
      try {
          // Send message to backend
          const res = await fetch('/api/chat', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ message }),
          });
          
          const data = await res.json();
          setResponse(data.response);
      } catch (error) {
          setResponse('Error: Could not connect to the server.');
      }
      setIsLoading(false);
  };

  return (
      <div className="container">
          <div className="chat-section">
              <h1 className="title">AI Chat System</h1>
              
              {/* Chat input form */}
              <form onSubmit={handleSubmit} className="form-container">
                  <div>
                      <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Enter your message..."
                          className="textarea"
                          disabled={isLoading}
                      />
                  </div>
                  
                  <button
                      type="submit"
                      disabled={isLoading}
                      className="submit-button"
                  >
                      {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
              </form>
          </div>
          
          {/* Display AI response */}
          {response && (
              <div className="response-container">
                  <h2 className="response-title">Response:</h2>
                  <p className="response-text">{response}</p>
              </div>
          )}
      </div>
  );
}

// Mount the React application
ReactDOM.render(
  <ChatInterface />,
  document.getElementById('root')
);