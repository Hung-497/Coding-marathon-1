import { useState } from 'react';
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    const contactUsInformation = {
      email,
      password,
      confirmPassword,
      nationality,
      submittedOn: new Date()
    };
    switch (contactUsInformation.nationality) {
      case 'fi': document.getElementById('greeting').innerHTML = 'Moi!'; break;
      case 'en': document.getElementById('greeting').innerHTML = 'Hello!'; break;
      case 'de': document.getElementById('greeting').innerHTML = 'Hallo!'; break;
      case 'fr': document.getElementById('greeting').innerHTML = 'Salut!'; break;
    }
    document.getElementById('email-adress').innerHTML = `Your email is ${contactUsInformation.email}`

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setNationality('');
  };
  return (
    <div>
      <h2>SignupPage</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' onChange={e => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input id='confirmPassword' type='password' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
        </div>
        <div>
          <label htmlFor='nationality'>Phone:</label>
          <select
            name='nationality'
            onChange={e => setNationality(e.target.value)}
            value={nationality}
          >
            <option value='' disabled>
              Select a nationality...
            </option>
            <option>fi</option>
            <option>en</option>
            <option>de</option>
            <option>fr</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
      <div id='userText'>
        <p id='greeting'></p>
        <p id='email-adress'></p>
      </div>
    </div>
  );
}

export default SignupPage;