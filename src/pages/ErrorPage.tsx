const ErrorPage = () => {
  return (
    <div className="flex flex-col place-content-center mt-36 ">
      <p className="font-bold text-2xl text-center text-slate-900">
        Page not found
      </p>
      <button className="hover:text-slate-900 mt-12  text-slate-600">
        <a href="/">Back to Homepage </a>
      </button>
    </div>
  );
};

export default ErrorPage;
