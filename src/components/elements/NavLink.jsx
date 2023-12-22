import { Link } from 'react-router-dom';

const NavLink = ({ to, id, children }) => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link to={to} onClick={() => handleScrollTo(id)}>
      {children}
    </Link>
  );
};

export default NavLink;