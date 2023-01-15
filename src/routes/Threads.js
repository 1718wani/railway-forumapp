import { Outlet } from "react-router-dom";
import * as React from 'react';

const Threads = () => {
  return (
    <div>
      <h2>これがすれっｄず</h2>
      <Outlet />
    </div>
  );
};
export default Threads;
