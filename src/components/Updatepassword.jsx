import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UpdatePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };

    // Current Password validation
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
      valid = false;
    }

    // New Password validation
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
      valid = false;
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
      valid = false;
    } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(formData.newPassword)) {
      newErrors.newPassword = 'Password must contain at least one number and one symbol';
      valid = false;
    }

    // Confirm Password validation
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Password updated:', formData);
        setIsSuccess(true);
        setFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error('Update error:', error);
        setErrors({
          ...errors,
          currentPassword: 'Failed to update password. Please try again.'
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="update-password-container">
      <div className="update-password-card">
        <div className="update-password-header">
          <h2>Update Password</h2>
          {isSuccess ? (
            <p className="success-message">Your password has been updated successfully!</p>
          ) : (
            <p>Enter your current and new password</p>
          )}
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="update-password-form">
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Enter current password"
                className={errors.currentPassword ? 'error' : ''}
              />
              {errors.currentPassword && (
                <div className="error-message">
                  <span className="error-icon">!</span>
                  {errors.currentPassword}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                className={errors.newPassword ? 'error' : ''}
              />
              {errors.newPassword && (
                <div className="error-message">
                  <span className="error-icon">!</span>
                  {errors.newPassword}
                </div>
              )}
              <div className="password-requirements">
                <p>Password must contain:</p>
                <ul>
                  <li className={formData.newPassword.length >= 8 ? 'valid' : 'invalid'}>
                    {formData.newPassword.length >= 8 ? '✓' : '✗'} At least 8 characters
                  </li>
                  <li className={/(?=.*[0-9])/.test(formData.newPassword) ? 'valid' : 'invalid'}>
                    {/(?=.*[0-9])/.test(formData.newPassword) ? '✓' : '✗'} At least one number
                  </li>
                  <li className={/(?=.*[!@#$%^&*])/.test(formData.newPassword) ? 'valid' : 'invalid'}>
                    {/(?=.*[!@#$%^&*])/.test(formData.newPassword) ? '✓' : '✗'} At least one symbol
                  </li>
                </ul>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && (
                <div className="error-message">
                  <span className="error-icon">!</span>
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className="update-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Updating...
                </>
              ) : (
                'Update Password'
              )}
            </button>
          </form>
        ) : (
          <div className="success-actions">
            <button 
              onClick={() => navigate('/login')} 
              className="back-to-profile"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdatePassword;