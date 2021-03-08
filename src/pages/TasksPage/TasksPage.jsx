import React from 'react'
import Task from '../../components/Task/Task';
import "./TasksPage.css"

const TasksPage = (props) => {
  return (
    <div className="TasksPage">
        <div className="header-footer">All Tasks</div>
      <div>
        {props.roles.map((role) => (
          role.tasks.map((task) => (
            <Task
              name={task.name}
              handleDeleteTask={props.handleDeleteTask}
              taskId={task._id}
            />
        ))
        ))}
      </div>
    </div>
  );
};

export default TasksPage;