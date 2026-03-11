function Calculator({ precio1, precio2, total, onChange1, onChange2 }) {
  return (
    <div className="calculator-card">
      <h1>Calculadora de Total a Pagar</h1>
      
      <div className="form-group">
        <label>Precio producto 1 (C$)</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={precio1}
          onChange={onChange1}
          placeholder="Ej: 450.50"
        />
      </div>

      <div className="form-group">
        <label>Precio producto 2 (C$)</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={precio2}
          onChange={onChange2}
          placeholder="Ej: 1200.00"
        />
      </div>

      <div className="total-section">
        <h2>Total a pagar: C$ {total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Calculator;