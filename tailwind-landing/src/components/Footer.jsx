export const Footer = () => {
  return (
    <footer className="bg-dark px-5 py-8">
      <div className="relative mx-auto max-w-screen-lg">
        <h2 className="text-center text-sm font-bold text-white sm:text-lg">
          Sign up to download the free PDF
        </h2>
        <form className="mx-auto my-6 flex max-w-[400px] flex-col gap-3 sm:flex-row sm:flex-wrap">
          <input
            type="text"
            placeholder="First name"
            className="bg-dark_input_bg border-dark_input_border grow rounded border-2 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-label focus:border-white"
          />
          <input
            type="text"
            placeholder="Last name"
            className="bg-dark_input_bg border-dark_input_border grow rounded border-2 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-label focus:border-white"
          />
          <input
            type="email"
            placeholder="john@email.com"
            className="bg-dark_input_bg border-dark_input_border grow rounded border-2 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-label focus:border-white"
          />
          <input
            type="text"
            placeholder="Your title"
            className="bg-dark_input_bg border-dark_input_border grow rounded border-2 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-label focus:border-white"
          />
          <button className="mt-3 w-full rounded bg-blue-500 py-2 text-sm font-bold text-white hover:opacity-80">
            Create Account
          </button>
        </form>
        <p className="text-center text-xs font-light text-gray-600">
          Copyright &copy; 2024 David Derama
        </p>
      </div>
    </footer>
  );
};
