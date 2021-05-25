import './App.css'
import Profile from './profile/Profile'
import './profile/Profile.css'



function App() {
  const handleName=()=> alert('hello iam Abir')

   return (
    <div className="App">
      <Profile fullName={'Abir Remadi'} bio={'Hello'} profession={'Mechatronics Engineer'}  alert={handleName}>
        <img src='https://i1.wp.com/pngall.com/wp-content/uploads/2017/03/Minnie-Mouse-Transparent.png' alt='profile'/>
      </Profile>
      </div>
    )
    }
export default App; 