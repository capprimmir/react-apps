import React from 'react';

function CourseForm(props) {
  return (
    <form>
      <div className="formGroup">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            onChange={props.onChange}
            name="title"
            className="form-control"
            value={props.course.title}          />
        </div>
      </div>

      <div className="formGroup">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            className="form-control"
            value={props.course.authorId || ""}          
          >
          <option  value=""/>
          <option  value="1">Cory House </option>
          <option  value="2">Scott Allen </option>
          </select>
        </div>
      </div>

      <div className="formGroup">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            id="category"
            type="text"
            name="category"
            onChange={props.onChange}
            className="form-control"
            value={props.course.category}          />
        </div>
      </div>

      <div className="formGroup">
        <button className="btn btn-primary">Save</button>
      </div>
    </form>
  );
}

export default CourseForm;