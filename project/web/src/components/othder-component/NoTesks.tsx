import { Box, Text } from "@chakra-ui/react";

export default function NoTesks() { 
  return (
    <Box height="24rem" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={1}>
      <Box pb={6}>
        <p className="logo lg">TO</p>
        <p className="logo do lg">DO</p>
      </Box>
      <Text fontSize="3xl" as="b">
        No Tasks Yet
      </Text>
      <Text>Get started by adding your first task</Text>
    </Box>
  );
}