
import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px 0',
    borderBottom: '1px solid #dee2e6'
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333'
  };

  const linkStyle = {
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginRight: '10px',
    transition: 'all 0.3s ease'
  };

  const linkHoverStyle = {
    color: '#007bff'
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={brandStyle}>Books-Buddy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={linkStyle}>Home-page</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyle}>Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyle}>Add-Books</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
