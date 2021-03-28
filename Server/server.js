const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let User = require('./Model/user.model');
let Tag = require('./Model/userTag.model');



const uri = "mongodb+srv://root:Welcome123!@cluster0.ddtcz.mongodb.net/RaftLabs?retryWrites=true&w=majority";
const userRoutes = express.Router();
const tagRoutes = express.Router();



app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/tag', tagRoutes);



  
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected…');
  })
  .catch(err => console.log(err))

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

//get all user
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

//get all tags
tagRoutes.route('/').get(function(req, res) {
    Tag.find(function(err, tag) {
        if (err) {
            console.log(err);
        } else {
            res.json(tag);
        }
    });
});



userRoutes.route('/:name').get(function(req, res) {
    let param = req.params.name;
    User.findOne({"name" : param},function(err,user){
        if(!err){
            console.log(user)
            res.json(user);
        }
        else
        {
            console.log("we got error",err);
        }
    });
});

//get all relationship to which a user belongs
tagRoutes.route('/:name').get(function(req, res) {
    let param = req.params.name;
    console.log(param)
    Tag.find(function(err,tag){
        if(!err){
            console.log(tag)
            var tagUsers = [];
            tag.forEach( relation  => {
                if(param == relation.user1 || param == relation.user2){
                    tagUsers.push(relation);
                }
            })
           
            res.json(tagUsers);
        }
        else
        {
            console.log("we got error",err);
        }
    });
});

//get relationship between two users
tagRoutes.route('/relation').post(function(req, res) {
    let user1param = req.body.user1;
    let user2param = req.body.user2;

    Tag.find(function(err,tag){
        if(!err){
            console.log(tag)
            var tagUsers = [];
            tag.forEach( relation  => {
                if((user1param == relation.user1 || user1param == relation.user2) && (user2param == relation.user1 || user2param == relation.user2)){
                    tagUsers.push(relation);
                }
            })
           
            res.json(tagUsers);
        }
        else
        {
            console.log("we got error",err);
        }
    });
});

//add a user
userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

//add a tag
tagRoutes.route('/add').post(function(req, res) {
    let tag = new Tag(req.body);
    console.log(tag)
    tag.save()
        .then(tagpost => {
            console.log(tagpost)
            res.status(200).json({'Tagged': 'Relationship added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new relationship failed');
        });
});

userRoutes.route('/update/:name').post(function(req, res) {
    User.findOne({"name": req.params.name}, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else
            user.name = req.body.name;
            user.phone = req.body.phone;
        

            user.save().then(user => {
                res.json('User updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});