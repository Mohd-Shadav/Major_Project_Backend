const express = require('express');
const { addProperty, getPropertyById, getAllProperty, userProperty,getQuerySearch,getCitySearch,deleteProperty } = require('../controllers/propertyController');
const Appointment = require('../models/Appointment');

const router = express.Router();

// Add Property Route
router.post('/add-property', addProperty);
router.get('/', getAllProperty);
router.get('/:id', getPropertyById);
router.get('/query/:preferences/:location/:budget',getQuerySearch)
router.get('/query/:location',getCitySearch)
router.delete('/delete-property/:id',deleteProperty)



// module.exports = router;

// Get Properties by User ID Route
router.get('/user/:userId', userProperty);

router.post('/:id/appointment', async(req, res) => {
   
        const { buyerId, sellerId, date, time, location } = req.body;
        const propertyId = req.params.id;

        // if (!buyerId || !sellerId || !date || !time || !location) {
        //     return res.status(400).json({ message: 'All fields are required.' });
        // }

        const newAppointment = new Appointment({
            propertyId,
            buyerId,
            sellerId,
            date,
            time,
            location,
            status: "pending",
        });

        await newAppointment.save();

        res.status(201).json({
            message: 'Appointment scheduled successfully.',
            appointment: newAppointment,
        });
   
});

module.exports = router;