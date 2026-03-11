import { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [precio1, setPrecio1] = useState('');
  const [precio2, setPrecio2] = useState('');

  const num1 = Number(precio1) || 0;
  const num2 = Number(precio2) || 0;
  const total = num1 + num2;

  return (
    <main className="main-center">
      <Calculator
        precio1={precio1}
        precio2={precio2}
        total={total}
        onChange1={(e) => setPrecio1(e.target.value)}
        onChange2={(e) => setPrecio2(e.target.value)}
      />
    </main>
  );
}

export default App;