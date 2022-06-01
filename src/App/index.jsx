import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from 'Header/index';
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from 'Constants/index';
import { useSelector } from 'react-redux';
import HomePage from 'Home/index';
import SettingsPage from 'Settings/wrapper';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from 'Styles';
import { withErrorBoundary } from 'react-error-boundary';
// const HomePage = lazy(() => import('../pages/Home/index.jsx'))

function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route
            path={HOME_PAGE_ROUTE}
            element={<HomePage />}
          />
          <Route
            path={SETTINGS_PAGE_ROUTE}
            element={<SettingsPage/>}
          />
        </Routes>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default withErrorBoundary(App, {
  fallback: <div>Something went wrong</div>,
});
