const InputComponent = ({ changeHandler, clickHandler, todo }: any) => {
  return (
    <div>
      <input
        onChange={changeHandler}
        value={todo}
        type="text"
        placeholder="Enter your todo"
      />
      <button onClick={clickHandler}>Add</button>
    </div>
  );
};
export default InputComponent;
