import Member from './Member';

const Group = ({ members = [], title, centerImages = true }) => {
  return (
    <div className="group">
      <h1 className="group-titles">{title}</h1>
      <hr />
      <div className="group-members">
        {members
          .sort((a,b) => {
            const first = "Group Leader";

            if (a.title === first || b.title == null) {
              return -1;
            } if (b.title === first || a.title == null) {
              return 1;
            }
            return a.title.localeCompare(b.title);
          })
          .map(member => (
            <Member key={member.name} {...member} center={centerImages} />
          ))
        }
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

export default Group;
