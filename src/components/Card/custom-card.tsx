import {
  Center,
  Text,
  Flex,
  Card,
  CardHeader,
  CardBody,
  Box,
} from "@chakra-ui/react";
import { CustomInput } from "../Input/custom-input";
import { Image } from "@chakra-ui/react";
import { Header } from "../Header/header";

export const CustomCard = () => {
  return (
    <>
      <Box
        width="100vw"
        height="100vh"
        paddingBottom={0}
        bgGradient="linear(to bottom right, #fafafa, #f4f4f5, #e4e4e7)"
      >
        <Header />
        <Flex flex="1" justify="center" align="center">
          <Card
            margin="0, auto"
            minW="350px"
            minH="400px"
            backdropFilter="blur(16px) saturate(180%)"
            bgColor={"#FFFFFF"}
            boxShadow="0 8px 24px rgba(0, 0, 0, 0.12)"
            borderRadius="12px"
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.125)"
            sx={{
              WebkitBackdropFilter: "blur(16px) saturate(180%)",
            }}
          >
            <CardHeader>
              <Center display="flex" flexDirection="column">
                <Box boxSize="150px">
                  <Image src="/assets/img/logo.png" />
                </Box>
                <Text
                  fontSize="2xl"
                  fontWeight="extrabold"
                  bgClip="text"
                  color="#1e293b"
                >
                  Welcome Back
                </Text>

                <Text fontSize="sm" color="#6b7280">
                  Sign in to continue to your account
                </Text>
              </Center>
            </CardHeader>

            <CardBody paddingTop={0} maxW="900px">
              <CustomInput />
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </>
  );
};
