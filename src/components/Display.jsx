import PropTypes from "prop-types";
import loadingGif from "../assets/gif/loading.gif";
const loader = (
  <div className="loading flex">
    <img src={loadingGif} alt="Loading Name..." />
  </div>
);
export const Display = ({ catName = "<Catname Here>", loading = false }) => {
  return <div className="display">{loading ? loader : catName}</div>;
};

Display.propTypes = {
  catName: PropTypes.string,
  loading: PropTypes.bool,
};
