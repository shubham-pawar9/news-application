const NavBar = ({
  inputRef,
  handleChange,
  handleIndia,
  handleIndEntertainment,
}) => {
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
            <img
              src={process.env.PUBLIC_URL + "/images/handSearch.svg"}
              alt="Enter Button"
            />
          </button>
        </div>
        <ul className="listOFBtns">
          <li>
            <button className="listBtn" onClick={handleIndia}>
              Top headlines of India
            </button>
          </li>
          <li>
            <button className="listBtn" onClick={handleIndEntertainment}>
              Entertainment headlines of India
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
