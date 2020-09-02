import React from "react";

const Showtask = ({ mytasks, deletetask }) => {
  const taskList = mytasks.length ? (
    mytasks.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.task}</span>
          <button onClick={() => deletetask(item.id)}>delete</button>
        </div>
      );
    })
  ) : (
    <p>You have no todos left</p>
  );
  return (
    <div className="task-content">
      <div>{taskList}</div>
    </div>
  );
};

export default Showtask;
