import { ChakraProvider } from "@chakra-ui/react";
import { CustomCard } from "./components/Card/custom-card";

function App() {
  return (
    <ChakraProvider>
      <CustomCard />
    </ChakraProvider>
  );
}

export default App;
