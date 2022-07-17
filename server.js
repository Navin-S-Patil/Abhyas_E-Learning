require('dotenv').config({ path: "./config.env" });
const express = require("express");
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

//Connect DB
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

//Error Handler (Should be last pieace of middleware)
app.use(errorHandler);

//server production assests
if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));
  // const path = require("path");

    // app.get("*", (req, res) => {

    //     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

    // })
}


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


process.on("unhandledRejection", (err, promise)=>{
  console.log(`Logged Error: ${err}`);
  server.close(()=> process.exit(1));
})