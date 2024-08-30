import React, { useState, useEffect } from 'react';
import { auth, database, signInWithEmailAndPassword, get, ref } from './firebaseConfig';
import styles from './LoginForms.module.css'


const LoginForm = ({ forgottenPasswordHandler, registerNewUserHandler }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const usersRef = ref(database, 'users');
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        const users = snapshot.val();
        const user = Object.values(users).find(u => u.username === username);
        if (user) {
          const email = user.email;
          await signInWithEmailAndPassword(auth, email, password);
          setSuccess(`Logged in successfully as ${user.username}`);
          window.location.href = "/home/login/dashboard/";
        } else {
          setError('User not found. Please check your credentials.');
        }
      } else {
        setError('No users found.');
      }
    } catch (error) {
      setError('Error logging in. Please try again later.');
    }
  };

  useEffect (() => {
    // add class to body tag
    document.body.classList.add(styles.bodyStyle);

    return  () => {
      document.body.classList.remove(styles.bodyStyle);
    };
  }, []);

  return (
    <div className={styles.wrapper} id={styles["login-form"]}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={styles["input-box"]}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <i class="bx bxs-user"></i>
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
        <div className={styles["remember-forgot"]}>
          <label className={styles.text}>
            <input type="checkbox" />
            Remember me
          </label >
          <a href="#" className={styles.text} onClick={forgottenPasswordHandler}>
            Forgot password?
          </a>
        </div>
        <button type="submit" id={styles["login-submit"]} className={styles.btn}>
          Login
        </button>
        <div className={styles["register-link"]}>
          <p>
            Don't have an account?{' '}
            <a href="/register" onClick={registerNewUserHandler}>
              Register
            </a>
          </p>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
