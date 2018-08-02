import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          // All the following event handlers are equivalent to the spread operator below
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // onBlur={field.input.onBlur}
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="post_content" label="Post Content" component={this.renderField} />
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> {title: 'asdf', categories: 'blah', content: 'blah blah'}
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  // if errrors is empty, the form is fine to submit
  // if errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
