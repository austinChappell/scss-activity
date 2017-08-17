const express = require('express'),
      app = express();

let port = process.env.PORT || 3000;

app.use(express.static('public'));

console.log('===============================================');
console.log(process.env);

app.listen(port, (req, res) => {
  console.log(`Listening on PORT ${ port }.`);
});
