import { Link } from 'react-router-dom';
import './profile.scss';

const Sidebar = () => {
  return (
    <section className="profile">
    <div>
      <ul className="profile__menu">
        <li>
          <i class="far fa-comments"></i>
          <span>Messages</span>       
        </li>
        <li>
          <i class="fas fa-user-friends"></i>
          <span>Users</span>       
        </li>
        <li>
          <i class="far fa-bookmark"></i>
          {/* <Link to="/saved"> */}
            <span>Saved</span>     
          {/* </Link> */}
        </li>
        <li>
          <i class="fas fa-cog"></i>
          <span>Settings</span>       
        </li>
      </ul>
    </div>
    <div className='profile__info'>
      <p><i class="far fa-user"></i> Username</p>
      <button className='btn'><i class="fas fa-sign-out-alt"></i> log out</button>
    </div>
</section>
  )
}

export default Sidebar
