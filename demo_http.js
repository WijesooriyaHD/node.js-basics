const http=require('http');  //export http module


                    // function(req.res){}
const server=http.createServer((req,res)=>{   //creating the server and handling req

    if(req==='./'){
        res.write("this displayed on the browser");
        res.end();
    }

    if(req==='./api/courses'){
        res.write(JSON.stringify([1,3,4,5,6])) //convert the arry to string
        res.end();
    }

});

server.listen(8000);  // listning port of the server
console.log("sever on...........")

