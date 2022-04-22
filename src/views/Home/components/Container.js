const Container = (props) => {
  return (
    <div className="flex flex-col items-center w-full h-screen px-5">
      {props.children}
    </div>
  );
};

export default Container;
