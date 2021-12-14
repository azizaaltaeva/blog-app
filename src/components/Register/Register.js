import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../store/actions/usersAction';
import './register.scss';

const Register = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (currentUser) {
      navigate('/home')
    }
  }, [currentUser])
  console.log(currentUser)

  const dispatch = useDispatch();

  const { email, password, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerUser(email, password));
    setState({email: '', password: '', passwordConfirm: ''})
  }

  const handleChange = (e) => {
    const values = {
      ...state,
      [e.target.name]: e.target.value,
    }
    setState(values);
  }

  return (
    <section className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          {/* <label>UserName</label>
          <input 
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
          /> */}
          <label>Email Address</label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <p className="error__msg"></p>
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={handleChange}
          />
          <label>Repeat Password</label>
          <input 
            type="password" 
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handleChange}
          />
          <p className="error__msg"></p>
          <button className="login__btn" type="submit">sign up</button>
          
          <div className="btn-form">
            <p>Have an account? </p>
            <Link to="/login">
              <button type="submit">sign in</button>
            </Link>
          </div>
        </form>
    </section>
  )
}

export default Register;
