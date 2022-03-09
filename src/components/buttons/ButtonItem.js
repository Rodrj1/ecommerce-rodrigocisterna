// * Button for Navigation and functions

import { useNavigate } from "react-router-dom";

export const ButtonItemNav = ({ text, classN, navURL }) => {
  const navigate = useNavigate();
  return (
    <button className={classN} onClick={() => navigate(navURL)}>
      {text}
    </button>
  );
};

export const ButtonItemFunction = ({ text, classN, fn }) => {
  return (
    <button className={classN} onClick={fn}>
      {text}
    </button>
  );
};
