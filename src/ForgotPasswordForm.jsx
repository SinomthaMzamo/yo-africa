import React, { useState } from 'react';
import styles from './LoginForms.module.css'


const ForgotPasswordForm = ({ showLoginHandler }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for password reset here
    setSuccess('Password reset instructions sent.');
  };

  return (
    <div className={styles.wrapper} id={styles["forgot-password-form"]}>
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <div className={styles["input-box"]}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
        </div>
        <button type="submit" id={styles["forgot-submit"]} className={styles.btn}>
          Submit
        </button>
        <div className={styles["login-link"]}>
          <p>
            Remember your password?{' '}
            <a href="#" onClick={showLoginHandler}>
              Login
            </a>
          </p>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
