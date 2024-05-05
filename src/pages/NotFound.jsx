const NotFound = () => {
  return (
    <div className="container flex justify-center items-center h-screen">
      <div>
        <h1 className=" text-5xl font-bold">
          <span className="text-red-500">404</span> - Page Not Found
        </h1>
        <p className=" text-3xl font-semibold">
          The requested page does not exist.
        </p>
        <div className="w-[90%] mx-auto flex items-center justify-center mt-5">
          <i className="text-[50px] fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
