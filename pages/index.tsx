import { signIn, signOut, useSession } from "next-auth/client";
import { Button, Image, Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      <Flex bg="#26547C" color="white" justify="space-between" p="3">
        <Text fontSize="3xl">Mod Manager</Text>
        <Box>
          <Flex>
            {!session && (
              <>
                <Button
                  onClick={() => signIn()}
                  color="white"
                  borderColor="white"
                  variant="outline"
                >
                  Sign in
                </Button>
              </>
            )}
            {session && (
              <>
                <Image
                  src={session?.user?.image as string}
                  alt="Profile Picture"
                  borderRadius="full"
                  boxSize="50px"
                  mx="5"
                />
                <Text fontSize="lg">{session?.user?.name}</Text>
                <Button
                  onClick={() => signOut()}
                  color="white"
                  borderColor="white"
                  variant="outline"
                  mx="5"
                >
                  Sign out
                </Button>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
