import React from 'react';
import './user.css';

const User = ({ name, age, job }) => {

  return (
    <div className='user'>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>Job: {job}</h3>
    </div>
  )
}

User.defaultProps = {
  name: "default name",
  age: "default age",
  job: "default job"
}

export default User

