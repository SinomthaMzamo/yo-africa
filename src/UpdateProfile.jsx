import { useEffect, useState } from 'react';
import { getDatabase, ref, get, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';

import styles from "./UpdateProfile.module.css"

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Initialize Firebase Authentication
  const auth = getAuth();

  useEffect(() => {
    const database = getDatabase();
    const userRef = ref(database, `users/${auth.currentUser.uid}`);

    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setName(userData.name);
        setEmail(userData.email);
      }
    });
  }, [auth.currentUser.uid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const database = getDatabase();
    const userRef = ref(database, `users/${auth.currentUser.uid}`);

    update(userRef, {
      name: name,
      email: email,
    })
      .then(() => {
        console.log('Profile updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile: ', error);
      });
  };

  return (
    <>
      <form className={styles["profile-update-form"]} onSubmit={handleSubmit}>
        <label>
          Name:
          <input className="field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </>
  );
};

export default UpdateProfile;
