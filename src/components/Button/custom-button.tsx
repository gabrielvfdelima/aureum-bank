import { Button, ButtonGroup } from "@chakra-ui/react";
import { login } from "../../services/login";
import { useToast } from "@chakra-ui/react";

export const Custombutton = () => {
  const toast = useToast();
  return (
    <ButtonGroup variant="solid" spacing="6">
      <Button
        w="200px"
        bgGradient="linear(to-r, #FCA311, #d97706)"
        color="#F4F4F5"
        _hover={{
          width: "210px",
          boxShadow: "0 0 12px rgba(212, 175, 55, 0.5)",
        }}
        transition="all 0.3s ease-in-out"
        onClick={() => login(toast)}
      >
        Login
      </Button>
      <Button
        variant="outline"
        width="200px"
        color="#374151"
        borderColor="#FCA311"
        _hover={{
          width: "210px",
          boxShadow: "0 0 12px rgba(212, 175, 55, 0.5)",
        }}
        transition="all 0.3s ease-in-out"
      >
        Create Account
      </Button>
    </ButtonGroup>
  );
};
