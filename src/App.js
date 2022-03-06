import './App.css';
import { Clock } from './clock/Clock';
import {Welcome} from './Welcome';

const user = {
  firstName: "Valeria",
  lastName: "Aynbinder",
  avatarUrl: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'

}

function App() {
const styles_dict = {
  color: 'red',
  fontSize: '30px'
}

let isLoggedIn = false;

  return (
    <div className="App" style={styles_dict}>
      <Welcome name='Valeria' birth_date='11-02-1987' user={user} loggedIn={isLoggedIn}/>
      {/* <Clock name='Ben' loc='ko-KR'/>
      <Clock name='Ben' loc='fa-IR'/>
      <Clock name='Ben' loc='ar-EG'/> */}
      <Clock name='Ben'/>
    </div>
  );
}

export default App;
