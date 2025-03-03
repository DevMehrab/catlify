import { Options } from "./Options.jsx";
import PropTypes from "prop-types";
export const Form = ({ onOptionSelected }) => {
  let options = [
    {
      name: "Gender",
      list: ["Male", "Female", "Unisex"],
    },
    {
      name: "Color",
      list: ["Black", "White", "Orange", "Grey", "Mixed"],
    },
    {
      name: "Personality",
      list: ["Playful", "Calm", "Aggressive", "Lazy", "Independent"],
    },
    {
      name: "Optional",
      list: ["Cute", "Elegant", "Funny", "Mythical"],
    },
  ];

  let elements = options.map((item, index) => {
    return (
      <Options
        key={index}
        name={item.name}
        list={item.list}
        onOptionSelected={onOptionSelected}
      ></Options>
    );
  });
  return <>{elements}</>;
};
Form.propTypes = {
  onOptionSelected: PropTypes.func.isRequired,
};
