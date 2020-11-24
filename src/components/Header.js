import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Breadcrumb, Divider } from 'antd';
import avatar from '../assets/img/avatar.jpg';

const Header = () => {
  return (
    <div>
      <PageHeader
        className="header"
        title="halfundecided | "
        subTitle="welcome!"
        avatar={{
          size: 128,
          alt: 'mj-avatar',
          src: avatar,
        }}
      />
      <ul className="nav">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>/</li>
      </ul>
      <Divider />
    </div>
  );
};

export default Header;
