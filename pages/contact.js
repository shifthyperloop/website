import withLayout from '../components/Layout';
import Layout from '../components/Layout';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaSnapchat,
  FaLinkedin,
  FaLeaf,
  GITrophy,
  IoMdPerson,
} from 'react-icons/fa';

<script
  type="text/javascript"
  src="C:\Users\hanne\OneDrive\Skrivebord\Proglab2\Shift-website\contacthelp.js"
></script>;

const Page = () => <p>Contact us</p>;

export default function About() {
  return (
    <Layout
      url="https://www.shifthyperloop.com/contact"
      title="Shift Hyperloop | Contact us"
    >
      <div className="contact-us">
        <p>Contact us</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Getting in touch is easy!</h2>
          <p>Andersens veg 5, c/o MTP, Valgrinda</p>
          <p>
            <a href="mailto:contact@shifthyperloop.com">
              contact@shifthyperloop.com
            </a>
          </p>
          <p className="some">
            <a href="https://www.facebook.com/ShiftHyperloop/">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/shift__hyperloop/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/shift-hyperloop/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/shifthyperloop">
              <FaGithub />
            </a>
          </p>
        </div>
        <form className="contact-form">
          <div className="name">
            <input
              type="text"
              name="name"
              autoFocus={true}
              placeholder="Name (optional)"
              className="name-field"
            />
          </div>

          <div className="email">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="email-field"
            />
          </div>

          <div className="message">
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              className="message-field"
            ></textarea>
          </div>

          <div className="submit">
            <button type="submit" id="submit-form" className="submit-form">
              Submit
            </button>
          </div>
        </form>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

        body {
          background-image: linear-gradient(0deg, #0008, #0008),
            url(/Contact-hyperloop-dark.png);
        }

        .contact-us {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          font-size: 3rem;
          font-family: 'Roboto Condensed', sans-serif;
          color: white;
          margin-bottom: 50px;
        }

        .contact-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: auto;
        }

        .contact-info {
          border-right: #fff5 1px solid;
          width: 50%;
          height: 30rem;
          text-align: center;
        }

        .contact-form {
          height: 30rem;
          border-left: #fff5 1px solid;
          width: 50%;
          padding-right: 10px;
          display: flex;
          flex-direction: column;
          justify-content: top;
          align-items: center;
        }

        .email,
        .name,
        .message {
          width: 80%;
          margin: 2%;
        }

        .name-field,
        .email-field,
        .message-field {
          border: none;
          padding: 10px 5px;
          color: #aaa;
        }

        .submit-form {
          border: none;
          margin-top: 20px;
          padding: 5px 5px;
          color: black;
          background-color: white;
        }

        .name,
        .email {
          /*height: 10%;*/
        }

        .message {
          flex: 1;
        }

        .message-field {
          height: 100%;
        }

        .some > a {
          padding: 10px;
          font-size: 1.7em;
        }

        input,
        textarea {
          background: rgba(33, 37, 41, 0.9);
          width: 100%;
          font-family: 'Roboto Condensed', sans-serif;
        }

        p {
          flex: 0 0 120px;
        }
      `}</style>
    </Layout>
  );
}
