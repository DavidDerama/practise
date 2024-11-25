type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <main className="grow">
      <section className="max-w-screen-lg mx-auto flex px-6 py-8">
        {children}
      </section>
    </main>
  );
}
