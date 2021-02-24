import { FaAngleDown } from 'react-icons/fa';

export default function TopImage({
  image = '',
  title = '',
  text = '',
  brightness = 0.3,
  height = '100vw',
  maxHeight = 'calc(100vh - 60px)',
  backgroundSize = 'cover',
  backgroundPosition = 'center center',
  hasArrow = true,
  fixedOnMobile = false,
  joinbutton = false,
  after = true,
}) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h4>{text}</h4>
      {joinbutton ? (
        <div className="join-buttons">
          <a href="https://forms.gle/jsvrWTu891MuJQSV7" id="front-button">
            Apply!
          </a>
          <a href="/joinus" id="front-button">
            Available positions
          </a>
        </div>
      ) : null}
      {hasArrow ? (
        <div className="arrow">
          <FaAngleDown size={35} />
        </div>
      ) : null}
      <style jsx>
        {`
          h1,
          h4 {
            z-index: 1;
            margin: 0;
            color: white;
          }
          h1 {
            font-size: 16vw;
          }
          h4 {
            font-size: 5vw;
          }
          @media (min-width: 640px) {
            h1 {
              font-size: 5em;
            }
            h4 {
              font-size: 1.5em;
            }
          }

          #front-button {
            border: 2px solid #3189c9;
            background: #fff2;
          }
          #front-button:hover {
            background-color: #3189c9;
          }
          .container {
            padding: 1em 16px 3em;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-flow: column nowrap;
            width: 100%;
            height: ${height};
            max-height: ${maxHeight};
            background-image: url(${image});
            background-repeat: no-repeat;
            background-size: ${backgroundSize};
            background-position: ${backgroundPosition};
            background-attachment: fixed;
            position: relative;
          }
          .container::after {
            content: '';
            background-color: black;
            opacity: ${1-brightness};
            z-index: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .arrow {
            position: absolute;
            z-index: 1;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%, -50%);
            background-attachment: fixed;
          }
          .join-buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
            flex-flow: row wrap;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            width: 100%;
            max-width: 1200px;
            bottom: 18%;
          }

          .join-buttons > a {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            margin: 16px 100px;
            cursor: pointer;
            min-width: 200px;
            width: 20%;
            min-height: 50px;
            height: 100%;
            border: 2px solid #3189c9;
            padding: 0.25rem 0.25rem;
            color: #fff;
            border: #111;
            text-decoration: none;
            line-height: 1rem;
            font-size: 1rem;
            font-weight: 600;
          }

          @media (max-width: 640px) {
            .container {
              height: 500px;
              background-repeat: no-repeat;
              background-attachment: ${fixedOnMobile ? 'fixed' : 'unset'};
              padding: 9em 16px 3em;
            }

            .join-buttons > a {
              width: 50px;
              height: 20px;
              font-size: 10px;
            }
            .join-buttons {
              bottom: 0;
            }
            .arrow {
              bottom: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
