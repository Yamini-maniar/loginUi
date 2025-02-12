
import './App.css';
import AppHeader from './Components/AppHeader';
import AppCard from './Components/AppCard';
import AppInput from './Components/AppInput';
import AppButton from './Components/AppButton';
import { useEffect, useState } from 'react';

function App() {

 
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [userInfo, setUserInfo] = useState({ user: null, pass: null })

  useEffect(()=>{
    setUserInfo({user:'',pass:''})
  },[])


  console.log('user', username, password)
  const onSubmit = () => {

    if (username.includes(' ')) {
      alert('Username is invalid')
      return
    }

    if (username !== '' && password !== '') {
      setUsername('')
      setPassword('')
      setUserInfo({
        user: username,
        pass: password
      })
    } else {
      alert('Invalid username or password!')
    }
  }

  console.log('info', userInfo)

  return (
    <div>
      <AppHeader title={'Login'} />
      {userInfo?.user !== "" && userInfo?.pass !== "" ?
        <div>
          <h4>login scussefull</h4>
        </div>
        :
        <AppCard>
          <AppInput name={'username'} value={username} onChangeValue={(val) => setUsername(val)} inputLabel={'Username'} />
          <AppInput name={'password'} value={password} onChangeValue={(val) => setPassword(val)} inputLabel={'Password'} isPassword={true} />
          <AppButton onClickSubmit={onSubmit} title={'Submit'} />
        </AppCard>

      }
    </div>
  );
}

export default App;
