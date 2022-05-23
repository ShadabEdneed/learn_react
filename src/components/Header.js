import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary shadow py-4 menu">
      <div className="container">
        <Link to="/" className="active item">Home</Link>
        <Link to="/productlisting" className="item">Product Items</Link>
        {/* <Link to="/productdetails" className="item">Product Details</Link> */}
        <Link to="/corona" className="item">Covid Update</Link>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>
        <Link to="/" className="ui item">Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default Header