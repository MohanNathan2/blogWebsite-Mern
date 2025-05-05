const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require("./routes/posts");
const CategoryRoutes = require("./routes/Category");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

//Middleware

app.use(bodyParser.json());
app.use(cors());

//connect to MongoDB

mongoose.connect('mongodb://localhost:27017/blog')
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('DB error' + error));

//use routes
app.use('/api/posts',postRoutes);
app.use('/api/categories',CategoryRoutes);

app.listen(PORT,() => console.log(`server running on port ${PORT}`));