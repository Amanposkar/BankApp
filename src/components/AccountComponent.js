import React from 'react';
import { Table } from 'react-bootstrap';

function AccountComponent({ accounts }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Account ID</th>
          <th>Account Name</th>
          <th>Account Type</th>
          <th>Balance (Rs)</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account, index) => (
          <tr key={index}>
            <td>{account.accountId}</td>
            <td>{account.accountName}</td>
            <td>{account.accountType}</td>
            <td>{account.balance}</td>
            <td>{account.creationDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AccountComponent;
