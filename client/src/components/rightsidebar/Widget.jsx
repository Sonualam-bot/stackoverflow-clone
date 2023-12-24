import { FaPen, FaCommentAlt, FaStackOverflow } from "react-icons/fa";

function Widget() {
  const widgetArr = [
    {
      icon: <FaPen />,
      text: "Observability is the key to the future of software and your DevOps Career",
    },
    {
      icon: <FaPen />,
      text: "Podcast 374: How valuable is your screen time?",
    },
    {
      icon: <FaCommentAlt />,
      text: "Review Queue and workflows - FInal release ",
    },
    {
      icon: <FaCommentAlt />,
      text: "Please welcome Valued Associations: #958 - V28last #959 - Spencer",
    },
    {
      icon: <FaStackOverflow />,
      text: "Outdated Answers: accepted answer is not proceeded on Stack Overflow ",
    },
    {
      icon: 38,
      text: "Why was this spam flag declined, yet the question marked as spam?",
    },
    {
      icon: 20,
      text: "What is the best course of action when user high enough rep to...",
    },
    {
      icon: 14,
      text: "Is a link to the 'How to ask' help page a usefull comment? ",
    },
  ];

  return (
    <div className="widget">
      {/* /blog tag  */}
      <h4>The overflow blog</h4>
      {widgetArr?.slice(0, 2).map((content) => {
        return (
          <>
            <div className="right-sidebar-div-1">
              <div className="right-sidebar-div-2">
                {content.icon}
                <p> {content.text} </p>
              </div>
            </div>
          </>
        );
      })}

      {/* second comment   */}
      <h4>Featured on Meta</h4>
      {widgetArr?.slice(2, 5).map((content) => {
        return (
          <>
            <div className="right-sidebar-div-1">
              <div className="right-sidebar-div-2">
                {content.icon}
                <p> {content.text} </p>
              </div>
            </div>
          </>
        );
      })}
      {/* Hot Meta Posts */}
      <h4>Hot Meta Posts</h4>
      {widgetArr?.slice(5, 9).map((content) => {
        return (
          <>
            <div className="right-sidebar-div-1">
              <div className="right-sidebar-div-2">
                <div className="right-icon-div">{content.icon}</div>
                <p> {content.text} </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Widget;
