import "./App.scss";
import { TimerProvider } from "./context/timerContext";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./routes";

function App() {
  return (
    <ChakraProvider>
      <TimerProvider className="App">
        <AppRouter />
      </TimerProvider>
    </ChakraProvider>
  );
}

export default App;
