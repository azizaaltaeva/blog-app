import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {

  return (
  <>
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
            <Link to="/home">home</Link>
            <Link to="/places">places</Link>
            <Link to="/blogs">blogs</Link>
            <Link to="/profile-account">my account</Link>
        </div>

        <div className="box active">
            <h3>follow us</h3>
            <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer
