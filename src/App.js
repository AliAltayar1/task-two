import { useRef, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function App() {
  const username = useRef(null);
  const email = useRef(null);
  const number = useRef(null);
  const password = useRef(null);

  const [isDisabled, setIsDisbled] = useState(false);

  function logMessage() {
    console.log(username.current.value);
    console.log(email.current.value);
    console.log(number.current.value);
    console.log(password.current.value);
  }

  function disableInput() {
    setIsDisbled(true);
  }

  const [numberValue, setNumberValue] = useState("1");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^[1-9]\d*$/.test(value)) {
      setNumberValue(value);
    } else if (value === "") {
      // Allow clearing the input
      setNumberValue("");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="App">
      <div className="contanier">
        <form noValidate>
          <h1>Task Two</h1>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              placeholder="+000 00 00 000"
              id="username"
              ref={username}
              disabled={isDisabled}
              maxLength="10"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              id="email"
              ref={email}
              disabled={isDisabled}
            />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <input
              type="number"
              placeholder="number"
              id="number"
              ref={number}
              disabled={isDisabled}
              onChange={handleChange}
              min="0"
              value={numberValue}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              id="password"
              ref={password}
              disabled={isDisabled}
            />
            <FontAwesomeIcon
              icon={faEye}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              logMessage();
              disableInput();
            }}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
