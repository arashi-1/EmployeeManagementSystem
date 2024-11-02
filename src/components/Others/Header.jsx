import React from 'react';

const Header = (props) => {
  
  const data=props.data
  // console.log(data.firstName)
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl font-semibold text-white">userName 👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-600 text-white rounded-md px-6 py-2 text-lg font-medium hover:bg-red-700 transition duration-200">
        Log Out
      </button>
    </div>
  );
};

export default Header;

