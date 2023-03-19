import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
  const handleName = (name) => {
    alert(`Hello ${name}!`);
  };

  return (
    <div className="App">
      <Profile fullName="Adel Ghanmi" bio="ATC Enginneer" profession="Web Development" handleName={handleName}>
        <img src="./profile/me.jpg" alt="Profile" />
      </Profile>
    </div>
  );
}

export default App;
