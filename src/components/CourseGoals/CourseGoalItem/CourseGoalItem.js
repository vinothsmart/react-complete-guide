import React, { useCallback } from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = ({ id, children, onDelete }) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = useCallback(() => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  }, [id, onDelete]);

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
