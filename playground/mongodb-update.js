
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        //genom att skriva return före så kommer allt stoppas. Vi vill inte att connected to mongodb server ska skrivas ut om den har failat här.
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bffbd341bf80ff0547bd74e')
    // }, {
    //         $set: {
    //             completed: true
    //         }

    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result)
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf28ddeab6cf69718c1cd8b')
    }, {
            $set: {
                name: 'Victoria'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result)
        });

    db.close();
});