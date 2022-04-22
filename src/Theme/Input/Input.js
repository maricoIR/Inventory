const Input = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      className="bg-transparent outline-none border px-2 dir-rtl py-[6px] text-textclr border-inputborder rounded-md font-medium text-sm"
    />
  );
};

export default Input;
