const express = require("express");
const app = express();
const axios = require('axios');
const router = express.Router();


router.get("/", async (req, res) => {

let param = req;
let config = {
  method: 'get',
  url: `https://swapi.dev/api/planets/${param}`,
}

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log(response.data)
  res.send(response.data)
  
})
.catch((error) => {
  console.log(error);
});

});

module.exports = router;





