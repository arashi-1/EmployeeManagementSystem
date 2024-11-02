import React from 'react';
import Header from '../Others/Header';
import TaskNumber from '../Others/TaskNumber';
import Tasklist from '../TaskList/Tasklist';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 w-screen h-screen bg-[#1c1c1c]'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskNumber data={props.data} />
      <Tasklist data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;

