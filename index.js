const PORT = 8000
const axios = require("axios").default;
const express = require("express")

const app = express ()


app.get('/word', (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5', wordLength: '5'},
        headers: {
          'x-rapidapi-host': 'random-words5.p.rapidapi.com',
          'x-rapidapi-key': 'c94bdc0f9bmshbc7236941db8b8dp1307a5jsn3c7dc13612af'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data[0])
      }).catch(function (error) {
          console.error(error);
      });
})


app.listen(PORT, () => console.log('Server running on port' + PORT))


