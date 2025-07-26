import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully!');
      setEmail('');
      setPassword('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setSuccess('');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccess('Signed in with Google!');
      navigate('/aesthetic'); // redirect to main page after sign-in
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '80px auto',
      padding: '2rem',
      borderRadius: '1rem',
      background: 'rgba(255,255,255,0.85)',
      boxShadow: '0 8px 48px rgba(0,0,0,0.32)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: '#5a4fcf', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
          Create Account
        </button>
      </form>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: '#fff', color: '#444', border: '1px solid #ccc', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: 24, height: 24, marginRight: 8 }} />
        Sign in with Google
      </button>
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
      {success && <div style={{ color: 'green', marginTop: '1rem' }}>{success}</div>}
    </div>
  );
}

export default SignUpPage;
