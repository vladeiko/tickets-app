import react from "react";
import { useDispatch } from "react-redux";
import { setInputValue, setFilter } from "../actions";
import { useSelector } from "react-redux";

const FindBar = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.inputReducer);

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter(inputValue));
  };

  return (
    <div className="find">
      <form className="find-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="find-bar__find"
          onChange={handleChange}
          // onSubmit={handleSubmit}
          value={inputValue}
        />
      </form>
    </div>
  );
};

export default FindBar;
