// Built in module (Basic Intro)

// 1 os module

const os = require('os')

const user  = os.userInfo()

// console.log(user);

// 2 path module

const path = require('path')

const filePath  = path.join('/firstmodule','/part1.js')

const base = path.basename(filePath)  // 



const absolute = path.resolve(__dirname,'/firstmodule','part.js') // giving a absolute path and __dirname its pointing towards the current directory that is app.js

// console.log(absolute);


// fs-module  

// There are two ways to handling files 1 sync and other async . first we are looking for the sync method : in sync method the code is running line by line so this approach hold all the new task untill finish the previos task 

const {readFileSync,writeFileSync} = require('fs')
// console.log("start")
const a = readFileSync('./content/first.txt','utf-8')
const b = readFileSync('./content/second.txt','ascii')

writeFileSync('./content/result_sync.txt',`This is the result:${a},${b}`,{flag:'a'})  // if the file is not present , node will create it and annything wriiten in the file will be overwrite to avoid this we can use flag

// console.log("Done with the task");
// console.log("starting the new task");

// Async approach 

const {readFile,writeFile} = require('fs')
// console.log("start")

// in async approach first is the argument the second is encoding and third is the callback : in the callback function our result is present :: in async approach the code is not running line by line , in this all the new task are running and node offload theprevios task.


// Below code show async approach to reading two files and then creating new file and writing something init

readFile('./content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const aa = result;
      readFile('./content/second.txt','utf-8',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const bb = result

        writeFile('./content/result_async.txt',`Here is the result with async: ${aa},${bb}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
        //    console.log("Done with the task");
        })
      })
})

// console.log("starting the new task");

// 4-module -- HTTP

const http = require('http')

const server = http.createServer((req,res)=>{
       
    // console.log(req) req is the very big object 
    if(req.url ==="/"){
        res.end("Welcome to the homepage")
    }
    else if(req.url === "/about"){
        res.end("Welcome to the about section")
    }

    // if the user going on the page that does not exist
    else{
    res.end(`
    <h1>Oops</h1>
    <p> we dont find the page that you are looking for </p>
    <a href = "/">back home</a>
    `)
    }

    // res.write("Welcome to the homepage")
    // res.end()
});

server.listen(5000,()=>{console.log("server runnig on 5000 port")})