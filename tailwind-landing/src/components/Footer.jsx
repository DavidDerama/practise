export const Footer = () => {
  return (
    <footer className="bg-gray-800 px-5 py-8">
      <div className="max-w-screen-lg mx-auto relative">
        <h2 className="text-sm sm:text-lg text-white font-bold text-center ">
          Sign up to download the free PDF
        </h2>
        <form className="flex flex-col sm:flex-row sm:flex-wrap  gap-3 max-w-[400px] mx-auto my-6 ">
          <input
            type="text"
            placeholder="First name"
            className="flex-grow bg-transparent bg-gray-700 py-2 px-3 rounded outline-none border-2  border-gray-600 focus:border-white text-white text-sm"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-grow bg-transparent bg-gray-700 py-2 px-3 rounded outline-none border-2  border-gray-600 focus:border-white text-white text-sm"
          />
          <input
            type="email"
            placeholder="john@email.com"
            className="flex-grow bg-transparent bg-gray-700 py-2 px-3 rounded outline-none border-2  border-gray-600 focus:border-white text-white text-sm"
          />
          <input
            type="text"
            placeholder="Your title"
            className="flex-grow bg-transparent bg-gray-700 py-2 px-3 rounded outline-none border-2  border-gray-600 focus:border-white text-white text-sm"
          />
          <button className="bg-blue-500 py-2 rounded mt-3 text-white text-sm font-bold w-full">
            Create Account
          </button>
        </form>
        <p className="text-gray-600 font-light text-xs text-center">
          Copyright &copy; 2024 David Derama
        </p>
      </div>
    </footer>
  );
};
