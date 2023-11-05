const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  bg-error_page ">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl font-medium text-gray-600 mt-4">Oops! Page not found</p>
            <p className="text-gray-500 mt-2">We are sorry, but the page you requested was not found</p>
            <a href="/" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-200">Go Home</a>
          </div>
        </div>
      );
    };
    

export default ErrorPage;