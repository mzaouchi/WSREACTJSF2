import { Container } from 'react-bootstrap';
import './App.css';
// import { Elyes, FirstComponent } from './Component/FirstComponent';
import FirstComponent from './Component/FirstComponent';
import Formulaire from './Component/Formulaire';
import NavbarPro from './Component/NavbarPro';
import gomycode from './2.jpg'

function App() {
  return (
    <div>
      <Container>
       <NavbarPro/>
       <Formulaire/>
        <h1 className='Nzayn'>Elyes</h1>
        <h2 style={{color : 'green', fontSize:'250px' }}>Hiba</h2>
        <FirstComponent/>
        {/* <Elyes/> */}
        {/* <FirstComponent/> */}
        </Container>
        <img src='/1.jpg' alt='Not found'/>
        <img src={gomycode} alt='Not Found'/>


       
    </div>
    
  );
}

export default App;
