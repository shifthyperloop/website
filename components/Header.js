import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const linkStyle = {
  marginRight: 15,
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={'header' + (menuOpen ? ' open' : '')}>
      <div className="head-side">
        <Link href="/">
          <a>
            <img src="/Logo(White_RightText).png" alt="Logo"></img>
          </a>
        </Link>
      </div>
      <div className="menu-dropdown" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      <div className="menu-options">
        <a href="/contact">Contact us</a>
        <a href="/posts">Posts</a>
        <a href="/partners">Partners</a>
        <a href="/joinus" id="join">
          Join
        </a>
        <span className="menu team-menu">
          <a href="/team">Team</a>
          <div className="items">
            <a href="/team">Team 2020</a>
            <a href="/team2019">Team 2019</a>
          </div>
        </span>
        <span className="menu other-menu">
          <span>Other </span>
          <div className="items">
            {/*<a href="/pod">Our pod</a>*/}
            <a href="/joinus">Join the team</a>
            <a href="/thesis">Thesis?</a>
          </div>
        </span>
      </div>
      {/*<div className="head-side">
      <Link href="/">
        <a>
          <img src="/flag-400.png" alt="Logo"></img>
        </a>
      </Link>
</div> */}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

        .header {
          box-sizing: border-box;
          height: 3.5rem;
          width: 100%;
          padding: 15px;
          background: #01020b;
          color: rgba(255, 255, 255, 0.5);
          font-size: 18px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 10px #1a1a1a;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
        }
        hr {
          width: 80%;
          border-width: 2px;
          border-style: solid;
          border-radius: 2.5px;
          border-color: #0080c9;
          margin-bottom: 75px;
        }

        #join {
          text-shadow: 0.1px 0.1px #005e60;
          z-index: 2;
          border: 2px solid #005e80;
          padding-right: 10px;
          padding-left: 10px;
          border-radius: 15px;
        }
        .menu.team-menu {
          opacity: 1;
        }

        .menu {
          position: relative;
          margin: 10px;
        }

        .menu > span:after {
          content: '▾';
        }

        .items {
          position: absolute;
          z-index: 1;
          background: #000;
          top: 100%;
          display: none;
          white-space: nowrap;
          flex-direction: column;
          width: 150px;
          right: -50px;
          top: 100%;
          padding-top: 12px;
        }

        .head-side {
          flex: 0 1 130px;
        }

        /*
      .head-side:last-child {
        justify-content: flex-end;
      }*/

        .head-side:first-child {
          justify-content: flex-start;
        }

        .menu:hover .items {
          display: flex;
        }

        .menu-options {
          width: 100%;
          max-width: calc(1200px - 130px);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
        }
        .menu-dropdown {
          display: none;
        }

        @media (max-width: 640px) {
          .head-side {
            flex-grow: 1;
          }
          .menu-dropdown {
            display: block;
            width: 2em;
            height: 100%;
            cursor: pointer;
          }
          .menu-options {
            flex-direction: column;
            position: absolute;
            top: 100%;
            display: none;
            background: inherit;
          }
          .header.open > .menu-options {
            display: flex;
          }
          .menu.team-menu > .items {
            display: none;
          }
          .menu.team-menu > span::after {
            display: none;
          }
          .menu.other-menu {
            position: static;
            margin: 0;
          }
          .menu.other-menu > span {
            display: none;
          }
          .menu.other-menu .items {
            text-align: center;
            position: static;
            padding: 0;
            display: flex;
          }
        }

        img {
          max-width: 130px;
          max-height: 2rem;
        }

        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: inherit;
          font-family: 'Roboto Condensed', sans-serif;
          margin: 10px;
        }

        a:hover {
          opacity: 0.6;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Header;
