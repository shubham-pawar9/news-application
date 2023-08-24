const NavBar = ({ inputRef, handleChange }) => {
  return (
    <>
      <div className="navBar">
        <div className="headNav">
          <input
            className="nameInputBox"
            type="text"
            ref={inputRef}
            onKeyPress={(e) => {
              if (e.key == "Enter") handleChange();
            }}
            title="Enter Your City, State or Country Name Here"
            placeholder="Type Here"
          />
          <button className="EnterBtn" onClick={handleChange}>
            <img src="../images/handSearch.svg" alt="Enter Button" />
          </button>
        </div>
        <ul>{/* <li>Check</li> */}</ul>
      </div>
    </>
  );
};
export default NavBar;
