import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div className="header">
    <div className="head-side">
      <Link href="/">
        <a>
          <img src="/Logo(White_RightText).png" alt="Logo"></img>
        </a>
      </Link>
    </div>
    <div className="menu-options">
      <a href="/contact">Contact us</a>
      <a href="/posts">Posts</a>
      <a href="/sponsors">Partners</a>
      <a href="/team">Team</a>
      <span className="menu">
        <span>Other </span>
        <div className="items">
          <a href="/pod">Our pod</a>
          <a href="/joinus">Join the team</a>
        </div>
      </span>
    </div>
    <div className="head-side">
      <Link href="/">
        <a>
          <img src="/flag-400.png" alt="Logo"></img>
        </a>
      </Link>
    </div>

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
        box-shadow: 1px 0.3px 10px #888888;
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

      .menu {
        position: relative;
        margin: 10px;
      }

      .menu > span:after {
        content: '▾';
      }

      .items {
        position: absolute;
        z-index: 9999;
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

      .head-side:first-child {
        justify-content: flex-start;
      }

      .head-side:last-child {
        justify-content: flex-end;
      }

      .menu:hover .items {
        display: flex;
      }

      div {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
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

export default Header;
