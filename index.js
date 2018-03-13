import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Spin } from 'antd';

function App() {
  return (
    <div style={{ margin: 200 }} id='root'>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <Spin/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
