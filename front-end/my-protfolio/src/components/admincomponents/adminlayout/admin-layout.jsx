import React from 'react';
import Sidebar from './sidebar';

const AdminLayout = (props) => {
  return (
    <div className="flex flex-row">
      <Sidebar/>
      <div className="w-10/12 bg-slate-200">
        {props.children}
      </div>
      
    </div>
  );
};

export default AdminLayout;