import { Outlet } from 'react-router-dom';
import MainMenu from './module/menu';


function App() {
  return (
    <div className="app">
      <MainMenu />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;


