import React, { useEffect, useState } from "react";
import "../Style/Ticket.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
// function StarRating({ initialColor = "white" }) {
//   const [starColor, setStarColor] = useState(initialColor);

//   const handleStarClick = () => {
//     setStarColor(starColor === "white" ? "orange" : "white");
//   };
//   return (
//     <span style={{ color: starColor }} onClick={handleStarClick}>
//       <i className="bi bi-star-fill"></i>
//     </span>
//   );
// }

function StarRating({ initialColor = "white", onRatingChange }) {
  const [starColor, setStarColor] = useState(initialColor);

  const handleStarClick = () => {
    // Toggle star color between white and orange
    setStarColor(starColor === "white" ? "orange" : "white");
    // Notify the parent component about the rating change
    onRatingChange(starColor === "white" ? 1 : 0); // You can assign different values to stars if needed
  };

  return (
    <span style={{ color: starColor, cursor: 'pointer' }} onClick={handleStarClick}>
      <i className="bi bi-star-fill"></i>
    </span>
  );
}

const Ticket1 = () => {
  const uniqueId = uuidv4()
  const now = new Date();
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  // const [order,setOrder] = useState()

  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState()
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    const parsedData = JSON.parse(storedData);
    fetchorder(parsedData.id);
    // Retrieve the data from localStorage
    if (storedData) {
      // Parse the stored data back into an object
      console.log(parsedData)
      // Set the retrieved data in the component's state
      setUsers(users => parsedData);
    }
  }, []);
  const fetchorder = async (id) => {



    try {
      const response = await axios.get(`http://localhost:5002/api/v1/user/get-random-record/${id}`);
      console.log(response.data.movie)
      setOrder(order => response.data.movie);
      // console.log(order);
    } catch (error) {
      console.error('Error fetching order:', error);
    }

  };





  const handleShow = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowSecondModal(true);
    }, 2000);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowSecondModal(false);
  };

  const [selectedValue, setSelectedValue] = useState('Click to select comment');

  const handleDropdownSelect = (value) => {
    setSelectedValue(value);
  };



  const [ratings, setRatings] = useState(Array(5).fill(0));

  const handleRatingChange = (index, rating) => {
    const newRatings = Array(5).fill(0)
    newRatings[index] = index+1;
    console.log(newRatings)
    setRatings(newRatings);
 
  };

  const averageRating = (ratings.reduce((a, b) => a + b, 0)).toFixed(1);
  const movieData = {
    user: users.id || 0,
    orderNumber: uniqueId,
    time: now.toLocaleString(),
    product: order?.title || "",
    price: order?.price || 0,
    comm : users.comm || 0,
    totalReturn: users.balance - (order?.price || 0)
  };
  
  const postRecord = async () => {
    try {
      const response = await axios.post(`http://localhost:5002/api/v1/user/add-record/`, movieData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('recorder',response.data);

    } catch (error) {
      console.error(error);
    
    }
  };



  return (
    <div className="Display_half">
      <div className="container_login1 ">
        <div className="headonline">Online film order page</div>
        <img src={require("../assets/gif.gif")} style={{ width: "100%" }} />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="redbut">
            <Button onClick={handleShow} className="redbut btn btn-danger">
              START
            </Button>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header className="bg-dark text-white border border-success">
                <Modal.Title>
                  <h1 className="text-success text-center">Order Details</h1>
                  <p style={{ fontSize: "15px", textAlign: "center" }}>
                    System is matching rating order now, expected waiting
                    duration 5 seconds. Please don't leave this page yet..{" "}
                  </p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-dark text-white border border-success">
                <p>Synchronizing the latest information..... </p>
                <p>Movie tickets are being matched.... </p>
                <p>
                  Confirming the merchant rating offer and information.......{" "}
                </p>
                <p>
                  Processing optimal resources and proceeding with the
                  rating....
                </p>
              </Modal.Body>
            </Modal>

            <Modal show={showSecondModal} onHide={handleClose}>
              <Modal.Header
                closeButton
                className="bg-dark text-white border border-danger border-bottom-0"
              >
                <Modal.Title>
                  <h1 className="text-danger text-center">Order Details</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-dark text-white border border-danger border-top-0">
                <div style={{ fontSize: '15px' }}>
                  <div>Order number: {movieData.orderNumber}</div>
                  <div>Order time: {movieData.time}</div>
                  <div>Product name: {movieData.product}</div>
                  <div>Price: ${movieData.price}</div>
                  <div>Commission: ${movieData.comm}</div>
                </div>
                <hr></hr>
                <p>Buyers Ratings:</p>
                {/* <div>
                  <p>
                    <span style={{ color: "orange" }}>4.9 </span>
                    {[1, 2, 3, 4, 5].map((index) => (
                      <StarRating key={index} />
                    ))}
                  </p>
                </div> */}
                <div>
                  <p>
                    <span style={{ color: "orange" }}>{averageRating} </span>
                    {ratings.map((rating, index) => (
                      <StarRating
                        key={index}
                        initialColor={rating === 1 ? "orange" : "white"}
                        onRatingChange={(newRating) => handleRatingChange(index, newRating)}
                      />
                    ))}
                  </p>
                </div>
                <p>
                  Ratings: <b>4.9</b>/10 from{" "}
                  <span className="text-primary">170,634 users</span>
                </p>
                <p>
                  Metascore <span className="text-primary">111/869</span>
                </p>
                <p>
                  Reviews: <span className="text-primary">2,454 users </span>|
                  <span className="text-primary"> 861 critic </span>|
                  <span className="text-primary"> 49 </span>from{" "}
                  <span className="text-primary">Metacritic.com</span>
                </p>


                <Dropdown onSelect={handleDropdownSelect}>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="bg-white text-black w-100 border border-light"
                  >
                    {selectedValue}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="I'm so glad I took the time to see this">
                      I'm so glad I took the time to see this
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="What a brilliant movie">
                      What a brilliant movie
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="I think this is a Masterpiece">
                      I think this is a Masterpiece
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="I feel that it is still a bit worse">
                      I feel that it is still a bit worse
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <button
                  type="button"
                  className="btn btn-danger rounded-pill w-50 mt-4"
                  onClick={postRecord}
                >
                  Submit
                </button>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className="acc">
          Account details &nbsp; <i class="fas fa-caret-down"></i>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="bluebtn">Trial Bonus: $188.00</div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="bluebtn1">
            <i class="fas fa-pencil-alt"></i> &nbsp;&nbsp;
            <Link to="/record" style={{ textDecoration: "none" }}>
              {" "}
              Record
            </Link>
          </div>
        </div>
        <div className="backdiv">
          <div className="drow">
            <div className="d1">
              <p>Balance</p>
              <p style={{ color: '#fdac63' }}>{users.balance}</p>
            </div>
            <div className="d2">
              <p>Number of Ticketing</p>
              <p style={{ color: "#01feee" }}>{users.ticketBought}</p>
            </div>
          </div>
          <div className="drow">
            <div className="d3">
              <p> Today Earnings</p>
              <p style={{ color: "#fdac63" }}>+$0.00</p>
            </div>
            <div className="d4">
              <p>On-Hold</p>
              <p style={{ color: "#fdac63" }}>$0.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ticket1;
