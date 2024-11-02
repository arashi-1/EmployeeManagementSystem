import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTask from '../Others/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="p-8 h-full w-full bg-[#1c1c1c]">
      <Header changeUser={props.changeUser} data={props.data} />
      <div className="mt-8">
        <CreateTask data={props.data} />
      </div>
      <div className="mt-8">
        <AllTask data={props.data} />
      </div>
    </div>
  );
};

export default AdminDashboard;
