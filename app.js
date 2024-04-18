const http=require("http"); 

const server = http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/')
    {
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head><title>girish</title></head>')
        res.write('<body><form action="/message"><input type="text" name="message"><input type="submit" value="send"></form></body>')
        res.write('</html>')
        return res.end();
    }



    res.setHeader('Content-type','text/html');
    res.write('<html>')
    res.write('<head><title>girish</title></head>')
    res.write('<body><h1>hello node</h1></body>')
    res.write('</html>')
    res.end();
    // console.log(req.method);
    // process.exit();

});
server.listen(3000);