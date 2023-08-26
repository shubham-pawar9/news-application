const NavBar = ({ inputRef, handleChange, handleDataUpdate }) => {
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
        <div className="listOFBtns">
          <ul className="topBtns">
            <li>
              <button
                id="headlineIndia"
                className="listBtn"
                onClick={handleDataUpdate}
              >
                Top headlines of India
              </button>
            </li>
            <li>
              <button
                id="entertainmentIndia"
                className="listBtn"
                onClick={handleDataUpdate}
              >
                Entertainment headlines of India
              </button>
            </li>
          </ul>
          <div>
            <ul className="listOfCities">
              <li id="satara" onClick={handleDataUpdate}>
                Satara
              </li>
              <li id="karad" onClick={handleDataUpdate}>
                Karad
              </li>
              <li id="kolhapur" onClick={handleDataUpdate}>
                Kolhapur
              </li>
              <li id="sangli" onClick={handleDataUpdate}>
                Sangli
              </li>
              <li id="pune" onClick={handleDataUpdate}>
                Pune
              </li>
              <li id="mumbai" onClick={handleDataUpdate}>
                Mumbai
              </li>
              <li id="bangalore" onClick={handleDataUpdate}>
                Bangalore
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
