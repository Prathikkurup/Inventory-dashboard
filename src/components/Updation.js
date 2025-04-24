import React, { useState } from 'react';

const MedicinePatientUpdater = () => {
  const [patientNumber, setPatientNumber] = useState(1);
  const [medicines, setMedicines] = useState([3, 2, 1]);

  const handlePatientNumberChange = (increment) => {
    setPatientNumber(prevNumber => Math.max(1, prevNumber + increment));
  };

  const handleMedicineChange = (index, increment) => {
    setMedicines(prevMedicines => {
      const newMedicines = [...prevMedicines];
      newMedicines[index] = Math.max(1, newMedicines[index] + increment);
      return newMedicines;
    });
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '300px' }}>
      <h3>Patient no:</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => handlePatientNumberChange(-1)}>&lt;</button>
        <div style={{ margin: '0 10px' }}>{patientNumber}</div>
        <button onClick={() => handlePatientNumberChange(1)}>&gt;</button>
      </div>

      <h3>Medicine List:</h3>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        {medicines.map((medicine, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <span style={{ flex: 1 }}>Medicine {index + 1}</span>
            <button onClick={() => handleMedicineChange(index, -1)}>&lt;</button>
            <div style={{ margin: '0 10px' }}>{medicine}</div>
            <button onClick={() => handleMedicineChange(index, 1)}>&gt;</button>
          </div>
        ))}
      </div>
      <div variant="primary " className="btn-success">submit</div>
    </div>

  );
};

export default MedicinePatientUpdater;