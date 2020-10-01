import React from 'react';

const ShowResults = ({ list, clickhandler }) => {
  /* const showList = list.map((item, i) => (
    <li id={i} key={i} onClick={clickhandler}>
      {item}
    </li>
  )); */

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li id={i} key={i} onClick={clickhandler}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowResults;
