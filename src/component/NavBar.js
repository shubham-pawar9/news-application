const NavBar = ({ inputRef, handleChange }) => {
  return (
    <>
      <div className="navBar">
        <input
          type="text"
          ref={inputRef}
          onKeyPress={(e) => {
            if (e.key == "Enter") handleChange();
          }}
        />
        <button onClick={handleChange}>Submit</button>
        <ul>
          <li>Check</li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
