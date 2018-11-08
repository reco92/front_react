import React, { Component } from "react";
import ReactDOM from "react-dom";
//import 'antd/dist/antd.css';
import { Input } from 'antd';


class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div style={containerForm}>
        <form id="article-form" >
          <Input placeholder='username' />
          <Input placeholder='password' type='password' />
        </form>
      </div>
    );
  }
}
export default FormContainer;

const containerForm = {
  marginTop: '20px',
  backgroundColor: 'rgb(255, 255, 255)',
  maxWidth: '350px',
  padding: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.0784314) 0px 2px 6px 0px',
}

const wrapper = document.getElementById("react-root");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

// #FF8B08