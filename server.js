const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const studentRoutes = require('./router/studentsRoute');
dotenv.config({ path: ".env" });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // for parsing JSON responses ( extract the string value from the json to javascript object)
app.use(morgan("dev")); // morgan is used for logging HTTP requests like this GET / 200 3.077 ms - 18 ( morgan is a middleware module)

app.use('/api/students',studentRoutes);



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} `);
});
