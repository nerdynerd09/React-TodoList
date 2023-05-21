import React from "react";

export const TodoItem = (props) => {
  return (
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      {props.todo.title}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>{props.todo.task}</strong>
      
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" className="btn btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
      </div>
      </div>
    </div>
  </div>

</div>
    
  );
};
