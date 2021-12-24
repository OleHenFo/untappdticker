
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.post('/', (req,res) => {
  console.log(req)
  return res.send(JSON.stringify({authToken:"ajdkdldødpkwwioi3838u"}))
})
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});