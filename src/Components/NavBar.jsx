import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  useColorMode,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { Auth, useAuth } from "@arcana/auth-react";

const NavBar = () => {
  const auth = useAuth();
  // let provider;
  // const auth = new AuthProvider("ba73e0c99103c2dfdce19a163f3c6b2cc8b1de97");
  // provider = auth.provider;

  
  const logout = async () => {
    console.log("Requesting logout");
    try {
      await auth.logout();
    } catch (e) {
      console.log({ e });
    }
  };
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="10px">
        <Box p="2">
          <Heading size="md"> Crypto News Aggregator</Heading>
        </Box>
        <Spacer />

        <Stack direction="row">
          <Switch colorScheme="teal" size="lg" onChange={toggleColorMode} />
          <Spacer />
        </Stack>
        <Box>
          <button
            className="btn btn-secondary"
            onClick={logout}
          >
            Logout
          </button>
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
