import './Sidebar.css';

import logo from '../../assets/logo.png';
import homeIcon from '../../assets/home.png';
import movieIcon from '../../assets/movie.png';
import televisionIcon from '../../assets/tv.png';
import starIcon from '../../assets/star-stroke.png';

function Sidebar() {
  return (
    <aside className="header__sidebar">
      <nav className="nav sidebar__nav">
        <a href="/" className="link">
          <img src={logo} alt="Logo" loading="lazy" />
        </a>
        <a href="/" className="link nav__link">
          <img src={homeIcon} alt="Home" loading="lazy" />
        </a>
        <a href="#movie" className="link nav__link">
          <img src={movieIcon} alt="Movie" loading="lazy" />
        </a>
        <a href="#television" className="link nav__link">
          <img src={televisionIcon} alt="Television" loading="lazy" />
        </a>
        <a href="#star" className="link nav__link">
          <img src={starIcon} alt="Star" loading="lazy" />
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
