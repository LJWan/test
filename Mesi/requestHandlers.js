var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");
  var form = new formidable.IncomingForm();
  form.uploadDir="tmp";
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    console.log("F.U.P: " + files.upload.path);
    setTimeout(function() {
      try {
        fs.renameSync(files.upload.path,"./tmp/test.png");
      } catch(e) {
        console.log(e);
      }
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  },3000
  );
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile("./tmp/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;


// var querystring = require("querystring"),
//     fs = require("fs");
//     formidable = require("formidable");

// function start(response) {
//   console.log("Request handler 'start' was called.");

//   var body =  '<html>'+
//     '<head>'+
//     '<meta http-equiv="Content-Type" '+
//     'content="text/html; charset=UTF-8" />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" enctype="multipart/form-data" '+
//     'method="post">'+
//     '<input type="file" name="upload">'+
//     '<input type="submit" value="Upload file" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';

//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(body);
//     response.end();
// }

// function upload(response, request) {
//   console.log("Request handler 'upload' was called.");

//   var form = new formidable.IncomingForm();
//   console.log("about to parse");
//   form.parse(request, function(error, fields, files) {
//     console.log("parsing done");
//     fs.renameSync(files.upload.path, "./tmp/test.png");
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("received image:<br/>");
//     response.write("<img src='/show' />");
//     response.end();
//   });

// }

// function show(response) {
//   console.log("Request handler 'show' was called.");
//   fs.readFile("./tmp/test2.png", "binary", function(error, file) {
//     if(error) {
//       response.writeHead(500, {"Content-Type": "text/plain"});
//       response.write(error + "\n");
//       response.end();
//     } else {
//       response.writeHead(200, {"Content-Type": "image/png"});
//       response.write(file, "binary");
//       response.end();
//     }
//   });
// }

exports.start = start;
exports.upload = upload;
exports.show = show;












// // var exec = require("child_process").exec;

// function start(response, postData) {
//   console.log("Request handler 'start' was called.");

//   var body = '<html>'+
//     '<head>'+
//     '<meta content="text/html"; http-equiv="Content-Type" charset=utf-8 />'+
//     '</head>'+
//     '<body>'+
//     '<form action="/upload" method="post">'+
//     '<textarea name="text" rows="20" cols="60"></textarea>'+
//     '<input type="submit" value="Submit text" />'+
//     '</form>'+
//     '</body>'+
//     '</html>';
//     response.writeHead(200,{"Content-Type":"text/html"});
//     response.write(body);
//     response.end();
// }

// function upload(response, postData) {
//   console.log("Request handler 'upload' was called.");
  
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Your' sent: " + postData);
//   response.end();
// }

// exports.start = start;
// exports.upload = upload;