import { useForm } from 'react-hook-form'
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useLoginMutation } from '@/api/authApi'
import { useEffect } from 'react'

interface IDefaultValues {
  email: string
  password: string
}

const Login = () => {
  const [loginRequest] = useLoginMutation()
  // const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IDefaultValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  const onSubmit = async (values: IDefaultValues) => {
    const response = await loginRequest(values)
    console.log(response)
  }

  useEffect(() => {
    // TODO: implement auth
    // navigate('/', { replace: true })
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          type='email'
          placeholder='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input
          id='password'
          type='password'
          placeholder='password'
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum length should be 6' },
            maxLength: { value: 24, message: 'Maximum length should be 24' },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default Login
