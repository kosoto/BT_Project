# 4.29

## [Node.js 학습](https://www.opentutorials.org/course/3332)
- Node.js 설치 (https://nodejs.org/ko/)
- 설치 확인방법 : cmd에서 node -v
- node로 js 파일 실행방법 : node fileName.js
- Node.js로 간단한 웹서버 만들기
  - 터미널에서 node (아래파일을 저장한 js파일) 명령어를 입력하면 웹서버구동 e.g)node main.js 
  - 접속은 localhost:3000
```javascript
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url)); //사용자의 응답에 전달할 데이터
});
app.listen(3000);
```

- Node.js에서 QueryString 사용하기

```javascript
var http = require('http');
var fs = require('fs');
var url = require('url'); //추가사항

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;  //추가사항
    console.log(queryData.id);
    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(queryData.id); 
});
app.listen(3000);
```

- 동적인 웹페이지 반환하기
  - 변수에 따라 변하는 html을 반환
```
...상단 코드 생략
var template = `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
    <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>${title}</h2>
    <p>The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991.
    </p>
    </body>
    </html>
    `;
    response.end(template); //html 코드를 반환
... 하단 코드 생략



