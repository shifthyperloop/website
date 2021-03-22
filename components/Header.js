import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={'header' + (menuOpen ? ' open' : '')}>
      <div className="head-side">
        <Link href="/">
          <a>
            <img src="/Logo(White_RightText).png" alt="Logo" />
          </a>
        </Link>
      </div>
      <div className="menu-dropdown" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      <div className="menu-options">
        <a href="/joinus">Join the team</a>
        <a id = "spons" href="/partners">Partners</a>
        <a id = "newsltr" href="/posts">Newsletters</a>
        <span className="menu team-menu">
          <a href="/team2021">Team</a>
          <div className="items">
            <a href="/team2021">Team 2021</a>
            <a href="/team2020">Team 2020</a>
            <a href="/team2019">Team 2019</a>
          </div>
        </span>
        <a href="/contact">Contact us</a>
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
          background: #01020b;
          color: #FFFFFF;
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
        
        .head-side {
          flex: 0 1 130px;
        }
        .head-side>a {
          display: flex;
          align-items: center;
        }
        .head-side img {
          height: 2.5rem;
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
        
        .menu {
          position: relative;
          margin: 10px;
        }
        .menu>a:after {
          margin-left: 3px;
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
          padding-top: 12px;
        }
        .menu:hover .items {
          display: flex;
        }
        
        a {
          text-decoration: none;
          color: inherit;
          font-family: 'Roboto Condensed', sans-serif;
          padding: 10px;
          display: block;
        }
        
        .menu.team-menu {
          margin: 0;
        }

        @media (max-width: 700px) {
          .head-side {
            flex-grow: 1;
          }
          .menu-dropdown {
            width: 3em;
            height: 100%;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            display: flex;
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
          .menu.team-menu>a {
            display: none;
          }
          .menu.team-menu > .items {
            display: flex;
            position: relative;
            right: 0;
            padding: 0;
            text-align: center;
          }
          .menu.team-menu > span::after {
            display: none;
          }
        }

        h1,
        a {
          font-family: 'Arial', sans-serif;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
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
