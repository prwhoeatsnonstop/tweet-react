const express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.PORT = process.env.PORT || 3000;

const app = express();

/*
 * =======================================================================
 * ================ REACT config                     =====================
 * =======================================================================
 */

app.use('/', express.static('public'));

/*
 * =======================================================================
 * ============== normal express routes go here   ========================
 * =======================================================================
 */

app.get('/banana', (request, response)=>{
  response.send("ehllo");
});

/*
 * =======================================================================
 * ==============   react express route           ========================
 * =======================================================================
 */

app.get('/react', (req, res) => {
  const myHtml = `
    <html>
      <body>
        <h1>Wow, react</h1>
        <div id="app"></div>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">        <script type="text/javascript" src="/main.js"></script>
      </body>
    </html>
  `;
  res.send( myHtml );
});

/*
 * =======================================================================
 * ============                     LISTEN                   =============
 * =======================================================================
 */

app.listen(process.env.PORT, () => {
  console.log(`ssssserver is now running on http://localhost:${process.env.PORT}`);
});