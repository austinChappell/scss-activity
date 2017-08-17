const express = require('express'),
      app = express();

let port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, (req, res) => {
  console.log(`Listening on PORT ${ port }.`);
});
