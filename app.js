import express from 'express';
import items from './data/items.json';
import _ from 'lodash';
import ItemRouter from './routers/ItemRouter';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import * as path from "path";

const PORT = 3000;
const server = express();
const BASE_ITEMS_URL = '/api/v1/items';

server.use(morgan('tiny'));

server.use(bodyParser.json());
server.set('views', path.join('views'));
server.set('view engine', 'ejs');

server.use(BASE_ITEMS_URL, ItemRouter);

server.get('/', (req, res) => {
    res.render('index', {items});
    }
);

console.log("Hello JS");
const message = "Hello Babel !!!!!!!!!";
console.log(message);

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
});
server.get('/', (req, res) =>{
    res.send("Hello from Express!!!");
});



