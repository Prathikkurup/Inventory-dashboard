import React, { useState } from 'react';
import '../stylesheets/machine.css';

// Mock function to simulate model prediction
const predictQuantity = (data) => {
    // In a real scenario, you would call an API here to get predictions
    // For simplicity, we're returning a mock prediction
    return data.map(entry => ({
        ...entry,
        Predicted_Quantity: entry.Patient_Count * 2 // Mock prediction logic
    }));
};
//
const Machine = () => {
    const [medicine, setMedicine] = useState('');
    const [patientCount, setPatientCount] = useState('');
    const [date, setDate] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const inputData = [{
            Medicine: medicine,
            Patient_Count: parseInt(patientCount, 10),
            Date: date
        }];

        // Mock prediction
        const prediction = predictQuantity(inputData);
        setResult(prediction[0].Predicted_Quantity);
    };

    return (
        <div className="App">
            <h1>Medicine Quantity Recommendation</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="medicine">Medicine Name:</label>
                <input
                    type="text"
                    id="medicine"
                    value={medicine}
                    onChange={(e) => setMedicine(e.target.value)}
                    required
                />
                <br />

                <label htmlFor="patient_count">Medicine used:</label>
                <input
                    type="number"
                    id="patient_count"
                    value={patientCount}
                    onChange={(e) => setPatientCount(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="#">Patient Name:</label>
                <input
                    type="text"
                    id="#"
                    // value={medicine}
                    // onChange={(e) => setMedicine(e.target.value)}
                    required
                />
                <label htmlFor="date">Date (YYYY-MM-DD):</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <br />

                <button type="submit">Predict</button>
            </form>

            {result !== null && (
                <p>Recommended Quantity: {result}</p>
            )}
        </div>
    );
};

export default Machine;
