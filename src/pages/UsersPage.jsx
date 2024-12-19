import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, deleteUser } from "../App/features/userSlice";

const UsersPage = () => {
  const users = useSelector((state) => state.user);

  const dispatch = useDispatch();
  // console.log(users);

  const addNewUser = () => {
    const id = prompt("Enter ID", "");
    const name = prompt("Enter Name", "");
    const email = prompt("Enter email", "");
    const role = prompt("Enter role", "");

    dispatch(addUser({ id, name, email, role }));
  };
  const updateUser = (id) => {
    const name = prompt("Enter Name", "");
    const email = prompt("Enter email", "");
    const role = prompt("Enter role", "");

    dispatch(editUser({ id, name, email, role }));
  };

  return (
    <>
      <div className="relative overflow-x-auto text-center">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Functions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, i) => (
              <tr className="bg-white border-b" key={i}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {data.id}
                </th>
                <td className="px-6 py-4">{data.name}</td>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">{data.role}</td>
                <td className="px-6 py-4 text-red-500 flex gap-3">
                  <button onClick={() => updateUser(data.id)}>Edit</button>
                  <button onClick={() => dispatch(deleteUser({ id: data.id }))}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="px-6 py-4 text-red-500" onClick={addNewUser}>
          Add new user
        </button>
      </div>
    </>
  );
};

export default UsersPage;
