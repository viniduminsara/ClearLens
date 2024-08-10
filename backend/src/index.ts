import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from './util/errorHandler';
import productRoutes from "./routes/ProductRoutes";
import userRoutes from "./routes/UserRoutes";

const mongoose = require('mongoose');
const app:Application = express();
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/clearLens');

db.once('open', () => console.log('Database connected :)'));
db.on('error', console.error.bind(console, 'Database connection error :('));

//routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);

//error handler
app.use(errorHandler);


app.get('/', (req:Request, res:Response) => {
    res.send('Hello, TypeScript Express!');
});

app.listen(PORT, () => {
    console.log(`Server running here 👉 http://localhost:${PORT}`);
});
