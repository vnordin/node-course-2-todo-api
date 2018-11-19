//const MongoClient = require('mongodb').MongoClient;
//nedan kod är samma som ovan. Bara att vi använder destructuring. 
// const {MongoClient, ObjectID} = require('mongodb');

const {MongoClient, ObjectID} = require('mongodb');


//example of destructuring objects. Nedan kommer skriva ut Victoria.
// var user = {name: 'Victoria', age: '27'};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        //genom att skriva return före så kommer allt stoppas. Vi vill inte att connected to mongodb server ska skrivas ut om den har failat här.
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert new doc into Users
    // db.collection('Users').insertOne({
    //     name: 'Victoria',
    //     age: '27',
    //     localtion: 'Stockholm'

    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});