import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AddRecordForm() {
  const [formData, setFormData] = useState({
    user: '',
    orderNumber: '',
    orderTime: '',
    product: '',
    price: '',
    comm: '',
    totalReturn: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/user/add-record',
        {
          user: formData.user,
          orderNumber: formData.orderNumber,
          orderTime: formData.orderTime,
          product: formData.product,
          price: formData.price,
          comm: formData.comm,
          totalReturn: formData.totalReturn,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.message === 'Record added') {
        alert('Record added successfully');
        // Optionally, you can reset the form here
        setFormData({
          user: '',
          orderNumber: '',
          orderTime: '',
          product: '',
          price: '',
          comm: '',
          totalReturn: '',
        });
      } else {
        alert('Failed to add record');
      }
    } catch (error) {
      console.error(error);
      alert('Record enter');
    }
  };

  return (
  
      
        <div className="Login_form">
          <div className="input_field">
            <input
              type="text"
              placeholder="User"
              className="input_field2"
              name="user"
              value={formData.user}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <input
              type="text"
              placeholder="Order Number"
              className="input_field2"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <input
              type="text"
              placeholder="Order Time"
              className="input_field2"
              name="orderTime"
              value={formData.orderTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <input
              type="text"
              placeholder="Product"
              className="input_field2"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <input
              type="text"
              placeholder="Price"
              className="input_field2"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <input
              type="text"
              placeholder="Comm"
              className="input_field2"
              name="comm"
              value={formData.comm}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input_field">
            <input
              type="text"
              placeholder="Total Return"
              className="input_field2"
              name="totalReturn"
              value={formData.totalReturn}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn_login" onClick={handleSubmit}>
            Add Record
          </button>
        </div>
  );
}



const RecordList = () => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRecords() {
            try {
              const storedData = localStorage.getItem('userData');
              const parsedData = JSON.parse(storedData);
                const response = await fetch(`http://localhost:5000/api/v1/user/get-records/${parsedData.id}`); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecords(data.record);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchRecords();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (records.length === 0) {
        return <div>No records found.</div>;
    }

    return (
        <div>
            {records.map((record, index) => (
                <div key={index} className="">
                    <div className="p-2 rounded-3 mt-3" style={{ borderColor: 'rgb(251, 58, 71)', background: 'rgb(38, 38, 49)', textAlign: 'left' }}>
                        <hr></hr>
                        <div>Order number: {record.orderNumber}</div>
                        <div>Order time: {record.orderTime}</div>
                        <div>Product: {record.product}</div>
                        <div>Price: {record.price}</div>
                        <div>Comm: {record.comm}</div>
                        <div>Total Return: {record.totalReturn}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Tab1Content = () => (
    <div >
        <AddRecordForm />
        {/* — No more yet — */}
    </div>
);

// const Tab2Content = () => (
// <div>
//     <div className='box1'>
//         <div className="p-2 rounded-3 mt-3" style={{ borderColor: 'rgb(251, 58, 71)', background: 'rgb(38, 38, 49)', textAlign: 'left' }}>
//             <hr></hr>
//             <div>Order number:  C30BB639</div>
//             <div>Order time:   2023-07-28 17:03:15</div>
//             <div>Product:  RM12.00 x 25</div>
//             <div>Price:  RM300.00</div>
//             <div>Comm:   RM0.75</div>

//         </div>
//     </div>
// </div>
// );



const tabOptions = [
    { id: 1, title: "Processing", content: <Tab1Content /> },
    { id: 2, title: "Completed", content: <RecordList /> }, // Use RecordList component here
];




export default function Record() {
    const [activeTab, setActiveTab] = useState(tabOptions[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>


            <div className='Display_half'>
                <div className="container_login5 ">
                    <div className='stickyhead'>
                        <div className='head1'>
                            <i class="fas fa-caret-left"></i>
                        </div>
                        <div className='head2'>
                            Record
                        </div>
                    </div>
                    <div className="App2">
                        <div className="tab-container">
                            <div className="tab-scrollable">
                                <div className="tab" style={{ width: "300px", display: "flex" }}>
                                    {tabOptions.map((tab) => (
                                        <button
                                            key={tab.id}
                                            className={`tab-btn ${tab.id === activeTab ? "active" : ""}`}
                                            onClick={() => handleTabClick(tab.id)}
                                        >
                                            {tab.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-content">
                                {tabOptions.map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`tab-pane ${tab.id === activeTab ? "active" : ""}`}>

                                        {tab.content}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
