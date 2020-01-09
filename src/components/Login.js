import React from 'react';
import { connect } from 'react-redux';
import { startLoginProcess } from '../actions/auth';
export const Login = ({ startLogin }) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Boiler Plate</h1>
      <p>Tag Line For Application</p>
      <button className='button' onClick={startLogin}>
        Login With Google
      </button>
    </div>
  </div>
);

// since we want to dispatch the startLoginProcess() to fire up th authentication
const mapDispatchToState = dispatch => {
  return {
    startLogin: () => dispatch(startLoginProcess())
  };
};

export default connect(undefined, mapDispatchToState)(Login);
