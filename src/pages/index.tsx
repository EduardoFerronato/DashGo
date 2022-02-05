import { Flex, Button, Stack } from "@chakra-ui/react"
import { Input } from "../components/Form/Input"
import { SubmitHandler, useForm } from "react-hook-form"

type SignInFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values);

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%" //ou w=""
        maxW={360} //ou "360px"
        bg="gray.800" //ou background=""
        padding="8" //ou p=""
        borderRadius={8}
        flexDir="column" //ou flexDirection=""
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input name="email" type="email" label="E-mail" {...register("email")} />
          <Input name="password" type="password" label="Senha" {...register("password")} />

        </Stack>
        <Button
          type="submit"
          marginTop="6"
          colorScheme="green"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
