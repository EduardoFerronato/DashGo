import { Box, Button, Stack } from "@chakra-ui/react"
import { PaginationItens } from "./PaginationItens"

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
      <PaginationItens number={1} isCurrent/>
      <PaginationItens number={2}/>
      <PaginationItens number={3}/>
      <PaginationItens number={4}/>
      <PaginationItens number={5}/>
      <PaginationItens number={6}/>
      </Stack>
    </Stack>
  )
}
