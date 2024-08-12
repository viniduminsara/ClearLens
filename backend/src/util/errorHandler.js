const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: 'Server error',
        error: err.message,
    });
};

module.exports = errorHandler;
