const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c079b9bd5c5677472e8065211';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }


// //find returnerar ALLA object som innehåller propertyn vi skickar med. här skickar vi id så kommer dock bara finnas en i databsen
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// //findOne skickar endast tillbaka ETT objekt, det första den hittar.
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5c064703607df53961aa930c').then((user) => {
    if (!user) {
        return console.log('not able to find usesr');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});