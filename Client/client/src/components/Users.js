import React, { useState , useEffect } from 'react';
import UserDataService from '../services/services';
import { Link } from "react-router-dom";



const Users = () => {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      retrieveUsers();
    }, []);


    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
      };
    
      const retrieveUsers = () => {
        UserDataService.getAll()
          .then(response => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      const refreshList = () => {
        retrieveUsers();
        setCurrentUser(null);
        setCurrentIndex(-1);
      };
    
      const setActiveUser = (user, index) => {
        setCurrentUser(user);
        setCurrentIndex(index);
      };

    
      const findByTitle = () => {
        UserDataService.get(searchTitle)
          .then(response => {
            console.log(response.data)
            var userData = [];
            userData.push(response.data)
            setUsers(userData);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

    return (
        <div className="list row" style={{paddingBottom:100,margin:50}}>
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Users List</h4>
  
          <ul className="list-group">
            {
              users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveUser(user, index)}
                  key={index}
                >
                  {user.name}
                </li>
              )) 
            }
          </ul>
  
        </div>
        <div className="col-md-6">
          {currentUser ? (
            <div style={{padding:30}}>
                <div class="card" style={{width:300}}>
                    <div class="card-body">
                        <h5 class="card-title">Selected User Details</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{currentUser.name}</h6>
                        <p class="card-text">{currentUser.name} can be contacted by using phone nummber : {currentUser.phone}</p>
                    </div>
                    <div class="card-link" style={{marginBottom:40}}>
                            <Link
                                to={"/add/tag"}
                                className="badge badge-warning"
                                style={{marginRight:10}}
                            >
                                Add Tags
                            </Link>
                            <Link
                            to={"/edit/" + currentUser.name}
                            className="badge badge-warning"
                            >
                            Edit
                            </Link>
                    </div>           
                </div>
                  
                           
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a User...</p>
            </div>
          )}
        </div>
      </div>
    );
}

export default Users;
