import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../store/actions/usersAction';
import './register.scss';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();
  const { email, password } = state;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate('/home')
    }
  }, [currentUser])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || ![password]) {
      return;
    }
    dispatch(loginUser(email, password));
    setState({ email: '', password: '' })
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
          <h1>Sign in</h1>
          <label>Username</label>
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
          <p className="error__msg"></p>
          <button className="login__btn" type="submit">sign in</button>
          
          <div className="btn-form">
            <p>Don't have an account? </p>
            <Link to="/">
            <button type="submit">sign up</button>
            </Link>
          </div>
        </form>
    </section>
  )
}

export default Login;