const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (request, response) => {
  response.send("Hello, Welcome to my MERN stack learning!");
})







app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));