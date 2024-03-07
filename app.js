import express from 'express';

const PORT = 3000;
const server = express();

console.log("Hello JS");
const message = "Hello Babel !!!!!!!!!";
console.log(message);

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
});
server.get('/', (req, res) =>{
   res.send("Hello from Express!!!");
});