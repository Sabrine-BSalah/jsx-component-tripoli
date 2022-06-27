import React from "react";

import usersLogo from "../assets/users.png";

const users = [
  {
    name: "Mohamed",
    age: 25,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
  },
  {
    name: "Ahmed",
    age: 28,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
  },
  {
    name: "Ali",
    age: 30,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
  },
];

const Users = () => {
  return (
    <div>
      <img src={usersLogo} alt="users logo" style={{ margin: "20px" }} />

      {/* Display list of users */}
      <div>
        <h2 className="title">List of users</h2>
        <div className="list-users">
          {users.map((user, i) => (
            <div className="user-card" key={i}>
              <h2 className="name">{user.name}</h2>
              <h2>{user.age}</h2>
              <p>{user.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Display list of users where age greater than 25 */}
      <div>
        <h2 className="title">List of users where age greater than 25</h2>
        <div className="list-users">
          {users
            .filter((user) => user.age > 25)
            .map((user, i) => (
              <div className="user-card" key={i}>
                <h2 className="name">{user.name}</h2>
                <h2>{user.age}</h2>
                <p>{user.desc}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Sum of all ages */}
      <div>
        <h2 className="title">Sum of ages</h2>
        <h2>{users.reduce((s, user) => s + user.age, 0)}</h2>
      </div>
    </div>
  );
};

export default Users;
