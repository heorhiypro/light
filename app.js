import express from 'express';
import items from './data/items.json';
import _ from 'lodash';


const PORT = 3000;
const server = express();
const BASE_ITEMS_URL = '/api/v1/items';

console.log("Hello JS");
const message = "Hello Babel !!!!!!!!!";
console.log(message);
      
server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
});
server.get('/', (req, res) =>{
   res.send("Hello from Express!!!");
});

server.get(BASE_ITEMS_URL, (req, res) => {
    res.json(items);
});

server.get(BASE_ITEMS_URL+'/:id', (req, res) => {
    const id = req.params.id;
    const item = _.find(items, item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.send('Not found');
    }
    }
);
