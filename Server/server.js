const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let User = require('./Model/user.model');

const uri = "mongodb+srv://root:Welcome123!@cluster0.ddtcz.mongodb.net/RaftLabs?retryWrites=true&w=majority";
const userRoutes = express.Router();


app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoutes);


  
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

userRoutes.route('/').get(function(req, res) {
    User.find(function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
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