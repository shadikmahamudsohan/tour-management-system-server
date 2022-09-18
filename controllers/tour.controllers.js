const servers = require('../services/tour.services');


exports.getTours = async (req, res, next) => {
    try {
        const result = await servers.getTourService();

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};

exports.createTour = async (req, res, next) => {
    try {
        //save or create
        console.log(req.body);
        const tour = await servers.createTourService(req.body);

        console.log('tour:', tour);

        tour.logger();

        const result = await tour.save();

        res.status(200).json({
            message: "success",
            message: 'Data inserted successfully',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Data is not inserted",
            error: error.message
        });
    }
};