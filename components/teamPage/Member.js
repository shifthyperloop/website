import { CMS_BASE_URL } from '../../common/constants';
import { FiMail } from 'react-icons/fi';

const Member = ({ name, url, title, email, group, center = true }) => {
  return (
    <div>
      <div className="image-container">
        <img src={CMS_BASE_URL + url} />
        <a
          href={''}
          className="email"
          onMouseOver={e => (e.target.href = 'mailto:' + email)}
        >
          <FiMail size={35} className="mail-symbol" />
        </a>
      </div>

      <h3>{name}</h3>
      <h4>{title}</h4>
      <style jsx>
        {`
          div {
            flex: 0 1 300px;
            text-align: center;
          }
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: ${center ? "center" : "top"};
          }
          .image-container {
            position: relative;
            border-radius: 50%;
            height: 200px;
            width: 200px;
            overflow: hidden;
          }
          .email {
            position: absolute;
            background-color: #0080c980;
            border-radius: 50%;
            --r: 25%;
            bottom: calc(0% - var(--r));
            left: calc(50% - var(--r));
            right: calc(50% - var(--r));
            top: calc(100% - var(--r));
            transition: all 1s;
            text-align: center;
          }
          .image-container:hover .email {
            --r: 100%;
          }
          :global(.mail-symbol) {
            position: absolute;
            top: 25%;
            transform: translate(-50%, -50%);
          }

          img,
          h3 {
            margin-bottom: -10px;
          }
          h4 {
            color: #0080c9;
            margin-bottom: 30px;
          }
        `}
      </style>
    </div>
  );
};

export default Member;
