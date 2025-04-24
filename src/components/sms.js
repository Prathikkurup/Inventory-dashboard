import React, { useState } from 'react';

const SmsSender = () => {
  const [message, setMessage] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const [status, setStatus] = useState('');

  const handleAddNumber = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  const handleNumberChange = (index, value) => {
    const newNumbers = [...phoneNumbers];
    newNumbers[index] = value;
    setPhoneNumbers(newNumbers);
  };

  const handleSendSms = () => {
    if (!message || phoneNumbers.length === 0) {
      setStatus('Please enter a message and at least one phone number.');
      return;
    }

    // Simulate sending SMS (this is where you would integrate with a service like Twilio)
    console.log('Sending SMS:', {
      message,
      phoneNumbers,
    });

    setStatus('SMS sent successfully (simulated).');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Send SMS</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Phone Numbers (one per line):
          {phoneNumbers.map((number, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <input
                type="text"
                placeholder={`Phone Number ${index + 1}`}
                value={number}
                onChange={(e) => handleNumberChange(index, e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
              />
            </div>
          ))}
          <button
            onClick={handleAddNumber}
            style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Add Phone Number
          </button>
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Message Content:
          <textarea
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </label>
      </div>

      <button
        onClick={handleSendSms}
        style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}
      >
        Send SMS
      </button>

      {status && (
        <div style={{ marginTop: '20px', color: status.includes('successfully') ? 'green' : 'red' }}>
          {status}
        </div>
      )}
    </div>
  );
};

export default SmsSender;
