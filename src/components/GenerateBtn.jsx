import PropTypes from "prop-types";
export const GenerateBtn = ({
  prompt = "",
  onNameGenerated,
  onNameGenerateStart,
}) => {
  function handleClick() {
    async function generate() {
      onNameGenerateStart();
      try {
        const API_URL = "https://api.together.xyz/v1/chat/completions";
        const API_KEY =
          "056ac2daf3163d77af2e4c8b3e661f43364aa89b59a0101b94555e550aff9cb2";

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek-ai/DeepSeek-V3",
            messages: [{ role: "user", content: prompt }],
          }),
        });

        const data = await response.json();
        onNameGenerated(data.choices[0].message.content);
      } catch (err) {
        onNameGenerated("Something went wrong!" + err.message);
      }
      // return data.choices[0].message.content
    }
    generate();
  }
  return (
    <div onClick={handleClick} className="generate-btn">
      Generate Name
    </div>
  );
};
GenerateBtn.propTypes = {
  onNameGenerated: PropTypes.func.isRequired,
  onNameGenerateStart: PropTypes.func.isRequired,
  prompt: PropTypes.string,
};
