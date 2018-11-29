
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        //genom att skriva return före så kommer allt stoppas. Vi vill inte att connected to mongodb server ska skrivas ut om den har failat här.
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne, fungerar samma som deleteMany men tar bara bort den första den hittar i db.
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // });

    //findAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //deleteMany users
    // db.collection('Users').deleteMany({name: 'Victoria'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
     db.collection('Users').findOneAndDelete({_id: new ObjectID("5bf28db8b001689715f3400b")}).then((result) => {
         console.log(result);
     });

    db.close();
});