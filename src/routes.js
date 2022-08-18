import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreatePage from './Pages/CreatePage/CreatePage';
import AuthPage from './Pages/AuthPage/AuthPage';
import ValidateLink from './Pages/ValidateLink/ValidateLink';
import Documentation from './Pages/Documentation/Documentation';

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Routes>
        <Route exact path="/create" element={<CreatePage />} />
        <Route path="/detail" element={<ValidateLink />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/" element={<Navigate replace to="/create" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" exact element={<AuthPage />} />
    </Routes>
  );
};
