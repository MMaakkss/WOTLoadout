import { useForm } from 'react-hook-form'
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useRegisterMutation } from '@/api/authApi'
import { useEffect } from 'react'

interface IDefaultValues {
  email: string
  nickname: string
  password: string
  repeatPassword: string
}

const Register = () => {
  const [registerRequest] = useRegisterMutation()
  // const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IDefaultValues>({
    mode: 'onSubmit',
  })

  const onSubmit = async (values: IDefaultValues) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { repeatPassword, ...userData } = values
    const response = await registerRequest(userData)
    console.log(response)
  }

  useEffect(() => {
    // TODO: implement auth
    // navigate('/', { replace: true })
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.nickname}>
        <FormLabel htmlFor='nickname'>Nickname</FormLabel>
        <Input
          id='nickname'
          type='nickname'
          placeholder='nickname'
          {...register('nickname', {
            required: 'Nickname is required',
            minLength: { value: 3, message: 'Minimum length should be 3' },
            maxLength: { value: 24, message: 'Maximum length should be 24' },
          })}
        />
        <FormErrorMessage>
          {errors.nickname && errors.nickname.message}
        </FormErrorMessage>
      </FormControl>
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
      <FormControl isInvalid={!!errors.repeatPassword}>
        <FormLabel htmlFor='repeatPassword'>Repeat Password</FormLabel>
        <Input
          id='repeatPassword'
          type='password'
          placeholder='repeatPassword'
          {...register('repeatPassword', {
            required: 'Password is required',
            validate: (value: string) =>
              value === watch('password') || 'The passwords do not match',
          })}
        />
        <FormErrorMessage>
          {errors.repeatPassword && errors.repeatPassword.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  )
}

export default Register
