import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eduardo Ferronato</Text>
          <Text color="gray.300" fontSize="small">
            edu.fe.guin@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Eduardo Ferronato" src="https://github.com/EduardoFerronato.png" />
    </Flex>
  )
}
