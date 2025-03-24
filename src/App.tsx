import { Outlet } from 'react-router-dom';
import Menu from './module/menu/Menu';


function App() {
  return (
    <div className="app">
      <Menu />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;