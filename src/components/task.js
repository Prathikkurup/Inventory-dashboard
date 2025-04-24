import React, { useState } from 'react';

const Task = () => {
  // Define the initial state of the orders
  const [orders, setOrders] = useState([
    { id: 1, name: 'Order 001', status: 'Pending' },
    { id: 2, name: 'Order 002', status: 'Satisfied' },
    { id: 3, name: 'Order 003', status: 'Incoming' },
    { id: 4, name: 'Order 004', status: 'Pending' },
    { id: 5, name: 'Order 005', status: 'Satisfied' },
  ]);

  // Function to handle status change
  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // Render the order rows
  const renderOrderRows = () => {
    return orders.map((order) => (
      <tr key={order.id}>
        <td>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input task-select" type="checkbox" />
              <span className="form-check-sign"></span>
            </label>
          </div>
        </td>
        <td>{order.name}</td>
        <td>{order.status}</td>
        <td className="td-actions text-right">
          <div className="form-button-action" >
            <button style={{margin:'10px'}}
              type="button"
              className="btn btn-primary"
              onClick={() => handleStatusChange(order.id, 'Pending')}
            >
              Set Pending
            </button>
            <button
              type="button" style={{margin:'10px'}}
              className="btn btn-success"
              onClick={() => handleStatusChange(order.id, 'Satisfied')}
            >
              Set Satisfied
            </button>
            <button
              type="button" style={{margin:'10px'}}
              className="btn btn-warning"
              onClick={() => handleStatusChange(order.id, 'Incoming')}
            >
              Set Incoming
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="col-md-8">
      <div className="card card-tasks">
        <div className="card-header ">
          <h4 className="card-title">Warehouse Orders</h4>
          <p className="card-category">Manage your warehouse orders</p>
        </div>
        <div className="card-body ">
          <div className="table-full-width">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input select-all-checkbox"
                          type="checkbox"
                          data-select="checkbox"
                          data-target=".task-select"
                        />
                        <span className="form-check-sign"></span>
                      </label>
                    </div>
                  </th>
                  <th>Order</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{renderOrderRows()}</tbody>
            </table>
          </div>
        </div>
        <div className="card-footer ">
          <div className="stats">
            <i className="now-ui-icons loader_refresh spin"></i> Updated just now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
