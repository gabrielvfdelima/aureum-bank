import { UseToastOptions } from "@chakra-ui/react";

export const login = (toast: (options: UseToastOptions) => void): void => {
  toast({
    title: "Login efetuado!",
    description: "Seja bem vindo",
    status: "success",
    position: "bottom-left",
    variant: "solid",
    duration: 2000,
    isClosable: true,
  });
};
