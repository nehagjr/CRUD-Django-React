import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/createAction";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setUsers] = useState({});

  const getUserData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUsers(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(input));
    console.log(input);
    navigate("/read");
  };

  return (
    <div className="vh-100 text-center ">
      <h2 className="mt-3">Fill the details of User </h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            className="form-control outline:none rounded"
            placeholder="Enter name"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={input.email} className="form-control rounded" placeholder="Enter Email" onChange={getUserData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            value={input.age}
            placeholder="Enter Age"
            className="form-control rounded"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input mx-1 "
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
            required
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input mx-1"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
