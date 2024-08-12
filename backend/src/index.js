const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const productRoutes = require('./routes/ProductRoutes');
const errorHandler = require('./util/errorHandler');

const app = express();
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

app.listen(PORT, () => {
    console.log(`Server running here 👉 http://localhost:${PORT}`);
});
