const Header = () => {
  return (
    <header className="bg-desktop bg-cover">
      <section className="max-w-screen-xl mx-auto px-4 text-white">
        <div className=" h-60 flex justify-end pb-10 flex-col">
          <h1 className="text-5xl font-semibold">David's Diner</h1>
          <p className="text-3xl text-shadow [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-light">
            The best burgers and pizzas in town.
          </p>
        </div>
      </section>
    </header>
  );
};

export default Header;
