export const AddCar = () => {
  return (
    <main>
      <div className="content">
        <h1>Add a car</h1>
        <form className="lisaa-form">
          <div className="form-input">
            <label htmlFor="merkki">Merkki:</label>
            <input type="text" name="merkki" />
          </div>
          <div className="form-input">
            <label htmlFor="malli">Malli:</label>
            <input type="text" name="malli" />
          </div>
          <div className="form-input">
            <label htmlFor="vuosimalli">Vuosimalli:</label>
            <input type="text" name="vuosimalli" />
          </div>
          <div className="form-input">
            <label htmlFor="omistaja">Omistaja:</label>
            <input type="text" name="omistaja" />
          </div>
          <button>Add</button>
        </form>
      </div>
    </main>
  );
};
