import "./styles.css";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`outline-none border ${props.className}`}
      onClick={props.onClick}
    >
      <span className="w-full justify-center flex items-center gap-2 custom-weight">
        {props.title} {props.icon}
      </span>
    </button>
  );
};

export default Button;
