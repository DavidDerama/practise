const Header = () => {
  return (
    <header className="bg-fixed bg-center bg-no-repeat bg-cover bg-desktop">
      <section className="max-w-screen-xl px-4 py-2 mx-auto text-white">
        <div className="flex flex-col justify-end pb-10  h-60 [text-shadow:_4px_3px_rgb(28_28_28)]">
          <h1 className="text-5xl font-semibold">David's Diner</h1>
          <p className="text-3xl font-light text-shadow">
            The best burgers and pizzas in town.
          </p>
        </div>
      </section>
    </header>
  );
};

export default Header;
