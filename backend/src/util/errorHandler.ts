import { Request, Response, NextFunction } from 'express';

interface ErrorWithStatus extends Error {
    status?: number;
}

const errorHandler = (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: 'Server error',
        error: err.message,
    });
};

export default errorHandler;
