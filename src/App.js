import Index from './index/index.jsx'
import './App.css'

function App() {
  return (
    <div className="bg">
      <div className="header">
        <h1>苹果历年的发布记录</h1>
        <p>
          数据源fork自 <a href="https://appleversions.onevcat.com/"> https://appleversions.onevcat.com/ </a>
        </p>
      </div>
      <div className="container">
        <Index />
      </div>
    </div>
  );
}

export default App;
