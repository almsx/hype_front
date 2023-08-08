import { useState, ChangeEvent, FormEvent } from "react";
import { newParse } from "../../ws/api-service";
import { ApiPostData } from "../../ws/types";
import "./FormParsed.css";

const FormParsed = () => {
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    try {
      const newParseResponse = await newParse(
        inputValue as unknown as ApiPostData
      );
      if (newParseResponse.error !== true) {
        setInputValue("");
      } else {
        setError(true);
        setErrorMessage(newParseResponse.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="form-container">
      {error && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingrese la cadena en el formato especificado"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormParsed;
