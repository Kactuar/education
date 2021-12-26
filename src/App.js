import logo from './logo.svg';
import './App.css';
import { Input, Space } from 'antd';
import { useState } from "react";

const { Search } = Input;

function App() {
  const [computed, setComputed] = useState(0)

  const onSearch = (inp) => {
    let result = 0;

    for (let key = 1; key <= +inp; key++) {
      result = result + key
    }

    setComputed(result)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Вычислить"
            size="large"
            onSearch={onSearch}
          />
          <Input value={computed}/>
        </Space>
      </header>
    </div>
  );
}

export default App;
