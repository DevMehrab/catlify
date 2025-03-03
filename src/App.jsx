import { useState } from "react";
import { Display } from "./components/Display";
import { Form } from "./components/Form";
import { GenerateBtn } from "./components/GenerateBtn";
import { Nav } from "./components/Nav";
function App() {
  const [name, setName] = useState("Bilai");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  return (
    <div className="container">
      <Nav />
      <GenerateBtn
        prompt={prompt}
        onNameGenerated={(name) => {
          setName(name);
          setLoading(false);
        }}
        onNameGenerateStart={() => {
          setLoading(true);
        }}
      />
      <Display catName={name} loading={loading} />
      <Form
        onOptionSelected={({ aiPrompt }) => {
          setPrompt(aiPrompt);
        }}
      />
      <center>
        Made by <b>Mehrab Hossain</b>
      </center>
    </div>
  );
}

export default App;
