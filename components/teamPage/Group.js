import Member from './Member';

export default ({ members = [], title, centerImages = true }) => {
  return (
    <div className="group">
      <h1 className="group-titles">{title}</h1>
      <hr />
      <div className="group-members">
        {members.map(member => (
          <Member key={member.name} {...member} center={centerImages} />
        ))}
      </div>
      <style jsx>
        {`
          hr {
            width: 80%;
            border-width: 2px;
            border-style: solid;
            border-radius: 2.5px;
            border-color: #0080c9;
            margin-bottom: 75px;
          }
          .group-titles {
            margin-bottom: 2px;
            margin-top: 10px;
          }
          .group {
            margin: 100px auto;
            display: flex;
            flex-flow: column nowrap;
            max-width: 1200px;
          }
          .group-members {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
          }
          h1 {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};
