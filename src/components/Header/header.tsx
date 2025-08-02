import {
  Box,
  Flex,
  Heading,
  Spacer,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { UserRound } from "lucide-react";

export const Header = () => {
  return (
    <Flex
      paddingInlineEnd="15px"
      paddingInlineStart="15px"
      minWidth="max-content"
      height="60px"
      alignItems="center"
      gap="2"
      bgColor="transparent"
    >
      <Box p="2">
        <Heading color="#1e293b" size="md">
          Aureum Bank
        </Heading>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          width="100px"
          height="35px"
          bgColor="#fafafa"
          border="1px solid"
          borderColor="#a1a1aa"
          color="#111827"
          _hover={{
            bg: "#f4f4f5",
            boxShadow: "0 0 0 2px #a1a1aa69",
          }}
          transition="all 0.3s ease-in-out"
          leftIcon={<UserRound size="18px" color="#111827" />}
          paddingLeft="6px"
          paddingRight="6px"
          colorScheme="none"
        >
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};
