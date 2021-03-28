import React, { useState } from 'react';
import UserDataService from "../services/services";
import Users from './Users';


    const Home = () => {

        const initialUserState = {
            name: "",
            phone: "",
          };
          
        const [user, setUser] = useState(initialUserState);
        const [submitted, setSubmitted] = useState(false);

        const handleInputChange = event => {
            const { name, value } = event.target;
            setUser({ ...user, [name]: value });
        };
        

        const saveUser = () => {
            var data = {
              name: user.name,
              phone: user.phone
            };
        
            UserDataService.create(data)
              .then(response => {
                setUser({
                  title: response.data.user,
                  phone: response.data.phone,
                });
                setSubmitted(true);
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
          };

          const newUser = () => {
            setUser(initialUserState);
            setSubmitted(false);
          };

          return (
            <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newUser}>
            Add New User
          </button>
          <div class="container" style={{marginTop : 80,width:700}}>
             <Users />
          </div>
        </div>
      ) : (
        <div class="container" style = {{marginTop : 20, marginBottom : 'auto', width : '40%'}}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              required
              placeholder = "Username"
              value={user.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              placeholder = "Phone"
              value={user.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>

          <button onClick={saveUser} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
        );

    }
      
    
export default Home;
  
     

       

