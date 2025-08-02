import {
  Stack,
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { Custombutton } from "../Button/custom-button";

export const CustomInput = () => {
  const [show, setShow] = React.useState(false);
  const toast = useToast();

  return (
    <Stack spacing={6}>
      <FormControl isRequired>
        <FormLabel color="#374151">Email Address</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="#9ca3af" />
          </InputLeftElement>
          <Input
            type="email"
            bgColor="#f3f4f6"
            placeholder="Email"
            _placeholder={{ color: "#9ca3af" }}
            color="#111827"
            border="1px"
            borderRadius="0.8rem"
            borderColor="#d1d5db"
            focusBorderColor="#d4af37"
            _focus={{ boxShadow: "0 0 0 3px rgba(212, 175, 55, 0.2)" }}
          />
        </InputGroup>
        <FormHelperText color="#6b7280" fontSize="12px">
          We'll never share your email.
        </FormHelperText>
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="#374151">Password</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <LockIcon color="#9ca3af" />
          </InputLeftElement>
          <Input
            bgColor="#f3f4f6"
            placeholder="Password"
            _placeholder={{ color: "#9ca3af" }}
            color="#111827"
            border="1px"
            borderRadius="0.8rem"
            borderColor="#d1d5db"
            focusBorderColor="#d4af37"
            _focus={{ boxShadow: "0 0 0 3px rgba(212, 175, 55, 0.2)" }}
            type={show ? "text" : "password"}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              color="#ffffff"
              bg="#d97706"
              _hover={{ bg: "#f5d76e" }}
              transition="all 0.3s ease-in-out"
              onClick={() => setShow(!show)}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Center>
        <Custombutton/>
      </Center>
    </Stack>
  );
};
