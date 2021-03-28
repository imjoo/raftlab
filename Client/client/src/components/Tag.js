import React, { useState , useEffect } from 'react';
import UserDataService from '../services/services';
import { Link } from "react-router-dom";
    const Tag = () => {


        const [searchTitleFirst, setSearchTitleFirst] = useState("");
        const [searchTitleSecond, setSearchTitleSecond] = useState("");

        const [users, setUsers] = useState([]);
        const [currentFirstUser, setCurrentFirstUser] = useState(null);
        const [currentSecondUser, setCurrentSecondUser] = useState(null);


        const onChangeFirstSearchTitle = e => {
            const searchTitleFirst = e.target.value;
            setSearchTitleFirst(searchTitleFirst);
          };

        const onChangeSecondSearchTitle = e => {
            const searchTitleSecond = e.target.value;
            setSearchTitleSecond(searchTitleSecond);
        };

          const findFirstByTitle = () => {
            UserDataService.get(searchTitleFirst)
              .then(response => {
                setCurrentFirstUser(response.data);
              })
              .catch(e => {
                console.log(e);
              });
          };

          const findSecondByTitle = () => {
            UserDataService.get(searchTitleSecond)
              .then(response => {
                setCurrentSecondUser(response.data);
              })
              .catch(e => {
                console.log(e);
              });
          };
        
        return(
        <div class="container">
            <div class="row">
                <div className="col" style={{margin:10}}>
                    <div class="row">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by title"
                                value={searchTitleFirst}
                                onChange={onChangeFirstSearchTitle}
                            />
                            <div className="input-group-append">
                                    <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={findFirstByTitle}
                                    >
                                    Search
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {currentFirstUser ? (
                                 <div style={{padding:30}}>
                                 <div class="card" style={{width:300}}>
                                     <div class="card-body">
                                         <h5 class="card-title">Selected User Details</h5>
                                         <h6 class="card-subtitle mb-2 text-muted">{currentFirstUser.name}</h6>
                                         <p class="card-text">{currentFirstUser.name} can be contacted by using phone nummber : {currentFirstUser.phone}</p>
                                     </div>          
                                 </div>              
                             </div>
                            ) : (
                                <div>
                                <br />
                                <p>Please Search a User...</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="col"  style={{margin:10}}>
                    <div class="row">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitleSecond}
                            onChange={onChangeSecondSearchTitle}
                        />
                        <div className="input-group-append">
                                <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={findSecondByTitle}
                                >
                                Search
                                </button>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    {currentSecondUser ? (
                             <div style={{padding:30}}>
                             <div class="card" style={{width:300}}>
                                 <div class="card-body">
                                     <h5 class="card-title">Selected User Details</h5>
                                     <h6 class="card-subtitle mb-2 text-muted">{currentSecondUser.name}</h6>
                                     <p class="card-text">{currentSecondUser.name} can be contacted by using phone nummber : {currentSecondUser.phone}</p>
                                 </div>          
                             </div>              
                         </div>
                        ) : (
                            <div>
                            <br />
                            <p>Please Search a User...</p>
                            </div>
                        )
                    }
                </div>
            </div>
           
        </div>
        <div class="row-md-12">
                <select style={{width:300}} class="form-select" aria-label="Default select example">
                    <option selected>Select Tags</option>
                    <option value="1">Father</option>
                    <option value="2">Mother</option>
                    <option value="3">Sister</option>
                </select>
        </div>
    </div>

    );

    }

export default Tag;