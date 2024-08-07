export default function Banner({ children, result, id }) {
  const messageDisplay = () => {
    if (result === "success") {
      return { message: "Congratulations!", icon: "fa-circle-check" };
    } else if (result === "warning") {
      return { message: "Attention", icon: "fa-triangle-exclamation" };
    } else if (result === "error") {
      return {
        message: "There is a problem with your application",
        icon: "fa-circle-xmark",
      };
    } else if (result === "neutral") {
      return { message: "Update available", icon: "fa-circle-info" };
    }
  };

  console.log(id);

  const display = messageDisplay();
  return (
    <div className={`banner ${result}`}>
      <div className="banner--message">
        <i className={`fa-solid ${display.icon}`}></i>
        <p>{display.message}</p>
      </div>
      {children}
    </div>
  );
}
