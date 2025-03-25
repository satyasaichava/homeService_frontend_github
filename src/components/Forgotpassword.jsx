import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate email
    if (!email) {
      setError('Email is required');
      setIsLoading(false);
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Password reset requested for:', email);
      setIsSubmitted(true);
      setError('');
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="forgot-password-header">
          <h2>Forgot Password</h2>
          {isSubmitted ? (
            <p className="success-message">Password reset link sent to your email!</p>
          ) : (
            <p>Enter your email to receive a password reset link</p>
          )}
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email"
                className={error ? 'error' : ''}
              />
              {error && (
                <div className="error-message">
                  <span className="error-icon">!</span>
                  {error}
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Reset Link'
              )}
            </button>
          <p>Back to? <button className="login-link" onClick={() => navigate('/')}>Homepage</button></p>
          </form>
        ) : (
          <div className="success-actions">
            <button 
              onClick={() => navigate('/login')} 
              className="back-to-login"
            >
              Back to Login
            </button>
            <p className="resend-text">
              Didn't receive the email?{' '}
              <button 
                type="button" 
                onClick={handleSubmit}
                className="resend-link"
              >
                Resend
              </button>
            </p>
            
          </div>
          
        )}
      </div>
      
    </div>
  );
}

export default ForgotPassword;