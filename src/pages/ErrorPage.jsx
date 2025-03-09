import React from 'react';

const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Page Not Found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700">
          Go back to home
        </a>
      </div>
    );
};

export default ErrorPage;