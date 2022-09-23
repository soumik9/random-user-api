const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//require
const userRoute = require('./routes/userRoute');

// routes
app.get('/', (req, res) => {
    res.send('Server is ready.')
  })

app.use('/user', userRoute);


// port listening
const startServer = (port) => {
    try {
      app.listen(port, () => {
        console.log(`Server running: http://localhost:${port}`);
      });
    } catch (error) {
      console.error(error);
      process.exit();
    }
  };
startServer(process.env.PORT || 5000);
