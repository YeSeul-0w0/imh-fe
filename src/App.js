import Router from "./component/Router";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "./component/layout/AppLayout";

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
