import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [rows, setRows] = useState([{ productName: '', productPrice: 0, quantity: 1, total: 0 }]);

  const handleNewRow = () => {
    setRows([...rows, { productName: '', productPrice: 0, quantity: 1, total: 0 }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;

    // Update total
    newRows[index].total = newRows[index].productPrice * newRows[index].quantity;

    // Update grand total
    const grandTotal = newRows.reduce((sum, row) => sum + row.total, 0);

    setRows(newRows);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <button className="bg-blue-500 text-white px-4 py-2 mb-4" onClick={handleNewRow}>
        New
      </button>
      {rows.map((row, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded flex items-center">
          <div className='mb-4 p-4'>
            <div className="mr-2">Product name</div>
            <input
              type="text"
              placeholder="Product name"
              value={row.productName}
              onChange={(e) => handleInputChange(index, 'productName', e.target.value)}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className='mb-4 p-4'>
            <div className="mr-2">Product price</div>
            <input
              type="number"
              placeholder="Product price"
              value={row.productPrice}
              onChange={(e) => handleInputChange(index, 'productPrice', parseFloat(e.target.value))}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className='mb-4 p-4'>
            <div className="mr-2">Quantity</div>
            <input
              type="number"
              placeholder="Qty"
              value={row.quantity}
              onChange={(e) => handleInputChange(index, 'quantity', parseInt(e.target.value))}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
          </div>

          <div className='mb-4 p-4'>
            <div className="mr-2">Total</div>
            <input type="text" placeholder="Total" value={row.total} readOnly className="mr-2 p-2 border border-gray-300 rounded" />
            {rows.length > 1 && (
              <button className="bg-red-500 text-white px-4 py-2" onClick={() => handleDeleteRow(index)}>
                Delete
              </button>
            )}
          </div>

        </div>
      ))}
      <div>
        <strong className="text-xl">Grand total: {rows.reduce((sum, row) => sum + row.total, 0)}</strong>
      </div>
    </div>
  );
};

export default App;
