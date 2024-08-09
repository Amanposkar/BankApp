import React, { useState } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';
import AccountComponent from './components/AccountComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    accountId: '',
    accountName: '',
    accountType: '',
    balance: '',
    creationDate: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSave = () => {
    const { accountId, accountName, accountType, balance, creationDate } = formData;
    if (!accountId || !accountName || !accountType || !balance || !creationDate) {
      setError('All fields are mandatory');
      return;
    }
    if (isNaN(balance) || parseFloat(balance) < 5000) {
      setError('Balance must be numeric and at least Rs 5000');
      return;
    }

    setAccounts([
      ...accounts,
      {
        accountId,
        accountName,
        accountType,
        balance: parseFloat(balance),
        creationDate
      }
    ]);
    setFormData({
      accountId: '',
      accountName: '',
      accountType: '',
      balance: '',
      creationDate: ''
    });
    setError('');
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center">Bank Account Form</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form>
        <Form.Group controlId="accountId">
          <Form.Label>Account ID</Form.Label>
          <Form.Control
            type="text"
            value={formData.accountId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="accountName">
          <Form.Label>Account Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.accountName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="accountType">
          <Form.Label>Account Type</Form.Label>
          <Form.Control
            as="select"
            value={formData.accountType}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="Savings">Savings</option>
            <option value="Checking">Checking</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="balance">
          <Form.Label>Balance (Rs)</Form.Label>
          <Form.Control
            type="number"
            value={formData.balance}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="creationDate">
          <Form.Label>Creation Date</Form.Label>
          <Form.Control
            type="date"
            value={formData.creationDate}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSave}>
          Save Info
        </Button>
      </Form>

      <h2 className="text-center mt-4">Account Details</h2>
      <AccountComponent accounts={accounts} />
    </Container>
  );
}

export default App;
