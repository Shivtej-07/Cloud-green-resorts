import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext(null);

const AUTH_KEY = 'cloudgreen_admin_auth';
const CREDENTIALS_KEY = 'cloudgreen_admin_creds';

const DEFAULT_CREDENTIALS = {
  username: 'admin',
  password: 'cloudgreen2026'
};

export function AdminAuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem(AUTH_KEY) === 'true' || localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [credentials, setCredentials] = useState(() => {
    try {
      const saved = localStorage.getItem(CREDENTIALS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_CREDENTIALS;
  });

  const login = (username, password, remember = true) => {
    if (
      username.trim().toLowerCase() === credentials.username.toLowerCase() &&
      password === credentials.password
    ) {
      setIsAuthenticated(true);
      if (remember) {
        localStorage.setItem(AUTH_KEY, 'true');
      } else {
        sessionStorage.setItem(AUTH_KEY, 'true');
      }
      return { success: true };
    }
    return { success: false, error: 'Invalid username or password. Default is admin / cloudgreen2026' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(AUTH_KEY);
  };

  const updateCredentials = (currentPassword, newUsername, newPassword) => {
    if (currentPassword !== credentials.password) {
      return { success: false, error: 'Current password does not match.' };
    }
    const updated = {
      username: newUsername || credentials.username,
      password: newPassword || credentials.password
    };
    setCredentials(updated);
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(updated));
    return { success: true };
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        updateCredentials,
        credentials
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
