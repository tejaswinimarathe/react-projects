import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState('');

  function handleValues(e) {
    setValue(value.concat(e.target.value));
  }

  function calculate() {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue('Error');
    }
  }

  function clearScreen() {
    setValue('');
  }

  return (
    <div className="container p-4 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: '18rem' }}>
        <h6>Calculator App</h6>
        <input
          type="text"
          value={value}
          className="form-control text-end mb-2"
          readOnly
        />

        <div className="card-body p-2">
          <div className="row g-2 mb-2">
            <div className="col-3"><input type="button" onClick={clearScreen} value="AC" className="form-control btn btn-light" /></div>
            <div className="col-3"><input type="button" value="()" className="form-control btn btn-light" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="%" className="form-control btn btn-light" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="/" className="form-control btn btn-warning" /></div>
          </div>

          <div className="row g-2 mb-2">
            <div className="col-3"><input type="button" onClick={handleValues} value="7" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="8" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="9" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="*" className="form-control btn btn-warning" /></div>
          </div>

          <div className="row g-2 mb-2">
            <div className="col-3"><input type="button" onClick={handleValues} value="4" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="5" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="6" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="-" className="form-control btn btn-warning" /></div>
          </div>

          <div className="row g-2 mb-2">
            <div className="col-3"><input type="button" onClick={handleValues} value="1" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="2" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="3" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="+" className="form-control btn btn-warning" /></div>
          </div>

          <div className="row g-2">
            <div className="col-6"><input type="button" onClick={handleValues} value="0" className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={handleValues} value="." className="form-control btn btn-secondary" /></div>
            <div className="col-3"><input type="button" onClick={calculate} value="=" className="form-control btn btn-success" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
