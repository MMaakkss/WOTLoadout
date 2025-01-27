import { useForm } from 'react-hook-form'
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  FormErrorMessage,
  Heading,
  Text,
} from '@chakra-ui/react'
import '../assets/style/form.scss'
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
    <div className='wrapper'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            id='email'
            type='email'
            placeholder='Email'
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
            placeholder='Password'
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
        <Button
          mt={4}
          colorScheme='teal'
          isLoading={isSubmitting}
          type='submit'
        >
          Login
        </Button>
      </form>
      <div className='wrapper__info'>
        <Heading size='2xl'>Login now!</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a
          voluptates obcaecati unde fuga harum magni quae cupiditate,
          reprehenderit, asperiores nisi est mollitia culpa in aut totam. Totam,
          aliquid repellat!
        </Text>
      </div>
    </div>
  )
}

export default Login
