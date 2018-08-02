import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          // All the following event handlers are equivalent to the spread operator below
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // onBlur={field.input.onBlur}
          {...field.input}
        />
      </div>
    );
  }
  renderCategoriesField(field) {
    return (
      <div className="form-group">
        <label>Categories</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }
  renderPostContentField(field) {
    return (
      <div className="form-group">
        <label>Post Content</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderTitleField} />
        <Field name="categories" component={this.renderCategoriesField} />
        <Field name="post_content" component={this.renderPostContentField} />
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm"
})(PostsNew);
