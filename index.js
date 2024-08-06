const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "static")));

app.use(express.json());

app.get("/", (req, res) => {
 
});
app.get('/about', (req, res) => {

  res.json({"ansari":22})

});
app.get('/contact', (req, res) => {
  res.send('<h1>contact page</h1>');
  
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});