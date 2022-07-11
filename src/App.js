import './App.css';
// import User from './components/user/User';
// import { users } from './data';

import Event from './components/event/Event';

function App() {
  const link = "https://google.com";

  return (
    <div className='app-home'>
      {/* <h1>List Of Users</h1>
        {users.map((user) => {
          return(
            <User key={user.id} name={user.name} age={user.age} job={user.job}/>
          )
        })
        } */}

        <Event />
      <a href={link}> Go to google </a>
    </div>
  )
}

export default App;
