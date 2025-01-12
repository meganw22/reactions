import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Button was clicked!</Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setShowAlert(true);
        }}
      >
        Acknowledge
      </Button>
    </div>
  );
}

export default App;
