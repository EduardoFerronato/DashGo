import { Button } from "@chakra-ui/react";

interface PaginationItensProps {
  number: number
  isCurrent?: boolean
}

export function PaginationItens({ isCurrent = false, number }: PaginationItensProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="green"
        disable
        _disable={{
          bg: "green.500",
          cursor: "default"
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {number}
    </Button>
  )
}
