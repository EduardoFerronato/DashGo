import { Flex, Button, Stack, Divider, Link as LinkChakra } from "@chakra-ui/react"
import { Input } from "../components/Form/Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { Logo } from "../components/Header/Logo"
import Link from "next/link"

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
})

export default function SignIn() {
  const { register, handleSubmit, formState: { errors }, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  // const toast = useToast()


  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    // if (!values.email) {
    //   toast({title:"Preencha um e-mail!", duration:2000})
    // }

    await new Promise(resolve => setTimeout(resolve, 2000))


    console.log(values);

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDirection="column"
    >
      <Logo />
      <Flex
        as="form"
        width="100%" //ou w=""
        maxW={360} //ou "360px"
        bg="gray.800" //ou background=""
        padding="8" //ou p=""
        borderRadius={8}
        flexDir="column" //ou flexDirection=""
        mt="4"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register}
            error={errors.password}
          />

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
      <Divider
        w={300}
        my="4"
      />
      <Link href="/dashboard" passHref>
        <LinkChakra>Testar sem Login</LinkChakra>
      </Link>
    </Flex>
  )
}
