import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './context/AuthContext';
import Navbar from './Components/Navbar/Navbar';
import Loader from './Components/Loader/Loader';
import 'materialize-css';

function App() {
  const { token, login, logout, userId, ready, saveLink } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
        saveLink
      }}>
      <Router>
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
