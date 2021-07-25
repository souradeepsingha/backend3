// // console.log("hello world");
// const http = require('http');

// const hostname = '127.0.0.10';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Document</title>
//   </head>
//   <style>
//       .container{
//           background-color: aquamarine;
//       }
//       .box{
//           background-color: rgb(240, 90, 227);
//           height: 250px;
//           width: 250px;
//           position: relative;
//           animation-name: harry2;
//           animation-duration: 2s;
//           /* animation-iteration-count: infinite; */
//           animation-iteration-count: 1;
//           animation-fill-mode: forwards;
//           animation-timing-function: ease-in-out;
//           animation-delay: 3s;
//           animation-direction: reverse;
//       }
//       @keyframes harry2{
//           0%{
//               top: 0px;
//               left: 0px;
//           }
//           25%{
//               top: 250px;
//               left: 0px;
//           }
//           75%{
//             top: 250px;
//             left: 250px;
//           }
//           100%{
//             top: 0px;
//             left: 250px;
//           }
//       }
//       @keyframes harry{
//           form{
//               width: 200px;
//           }
//           to{
//               width: 1270px;
//           }
  
//       }
//   </style>
//   <body>
//       <div class="container">
//           <div class="box">
//          this is
//           </div>
//       </div>
//   </body>
//   </html>`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const socialmedia = fs.readFileSync('./socialmedia.html')
const contact = fs.readFileSync('./contact.html')
const gallery = fs.readFileSync('./gallery.html')
const review = fs.readFileSync('./review.html')
const feature = fs.readFileSync('./feature.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <style>
        .container{
            background-color: aquamarine;
        }
        .box{
            background-color: rgb(240, 90, 227);
            height: 250px;
            width: 250px;
            position: relative;
            animation-name: harry2;
            animation-duration: 2s;
            /* animation-iteration-count: infinite; */
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in-out;
            animation-delay: 3s;
            animation-direction: reverse;
        }
        @keyframes harry2{
            0%{
                top: 0px;
                left: 0px;
            }
            25%{
                top: 250px;
                left: 0px;
            }
            75%{
              top: 250px;
              left: 250px;
            }
            100%{
              top: 0px;
              left: 250px;
            }
        }
        @keyframes harry{
            form{
                width: 200px;
            }
            to{
                width: 1270px;
            }
    
        }
    </style>
    <body>
        <div class="container">
            <div class="box">
           this is
            </div>
        </div>
    </body>
    </html>`);
  
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else if(url == '/socialmedia'){
        res.end(socialmedia);
    }
    else if(url == '/gallery'){
        res.end(gallery);
    }
    else if(url == '/review'){
        res.end(review);
    }
    else if(url == '/feature'){
        res.end(feature);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
