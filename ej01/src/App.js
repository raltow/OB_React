import logo from './logo.svg';
import './App.css';
import ComponentA from './components/component_a';

function App() {
  const contactoPrueba = {
    nombre: 'Fulanito',
    apellido: 'de OpenBootcamp',
    email: 'fulanito@open-bootcamp.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;