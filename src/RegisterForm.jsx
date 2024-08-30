import React, { useState } from 'react';
import { auth, database, createUserWithEmailAndPassword, set, ref } from './firebaseConfig';
import styles from './LoginForms.module.css'

const RegisterForm = ({ showLoginHandler }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email
      });

      setSuccess('User created successfully! You can now login.');
      // Optionally clear form fields
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUsername('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.wrapper} id={styles["register-form"]}>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className={styles["input-box"]}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Full Name"
            required
          />
          <i class="bx bxs-user"></i>
        </div>
        <div className={styles["input-box"]}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <i class="bx bxs-envelope"></i>
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <i class="bx bxs-lock-open-alt"></i>
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <i class="bx bxs-lock-open-alt"></i>
        </div>
        <div className={styles["remember-forgot"]}>
          <label className={styles.text}>
            <input type="checkbox" required />
            I agree with all terms and conditions
          </label>
        </div>
        <button type="submit" id={styles["register-submit"]} className={styles.btn}>
          Register
        </button>
        <div className={styles["login-link"]}>
          <p>
            Already have an account?{' '}
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

export default RegisterForm;
