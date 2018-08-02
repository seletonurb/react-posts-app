import React, { Component } from "react";
import { reduxForm } from "redux-form";

class PostsNew extends Component {
  render() {
    return (
      <div>
        <h3>New Post</h3>
      </div>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm"
})(PostsNew);
