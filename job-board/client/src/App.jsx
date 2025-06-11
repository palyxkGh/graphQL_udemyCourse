import { ApolloProvider } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { getUser } from './lib/auth.js';
import NavBar from './components/NavBar.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import CreateJobPage from './pages/CreateJobPage.jsx';
import HomePage from './pages/HomePage.jsx';
import JobPage from './pages/JobPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import {apolloClient} from "./lib/graphql/queries.js";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser);

  const handleLogin = (user) => {
    setUser(user);
    navigate('/');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <ApolloProvider client={apolloClient}>
      <NavBar user={user} onLogout={handleLogout} />
      <main className="section">
        <Routes>
          <Route index path="/"
            element={<HomePage />}
          />
          <Route path="/companies/:companyId"
            element={<CompanyPage />}
          />
          <Route path="/jobs/new"
            element={<CreateJobPage />}
          />
          <Route path="/jobs/:jobId"
            element={<JobPage />}
          />
          <Route path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
        </Routes>
      </main>
    </ApolloProvider>
  );
}

export default App;
