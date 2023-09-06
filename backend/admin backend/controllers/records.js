const Record = require('../models/Records')
const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');

 
const addRecord = async (req, res) => {
 const {user,orderNumber,orderTime,product,price,comm,totalReturn } = req.body
 try{
  const record = await Record.create({...req.body})
  res.status(StatusCodes.CREATED).json({ message:'Record added' })
  
 }catch(error){
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Server error!',error})
 }
}; 

const getAllRecords = async (req, res) => {
    try {
      const userId = req.params.id; // Replace with the actual user ID
  
      // Use Mongoose to find all orders for the specific user
      const records = await Record.find({ user: userId });
    if(!records){
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'Records not found' });

    }
      // Send the retrieved orders as a JSON response
      res.status(StatusCodes.OK).json({ message: 'success', record : records });
    } catch (error) {
      console.error('Error:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error!',error });
    }
  };

module.exports = {
 addRecord,getAllRecords
}