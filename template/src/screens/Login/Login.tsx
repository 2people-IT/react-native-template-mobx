import React from 'react'
import {Alert} from 'react-native'
import * as UI from 'shared/ui'
import {s} from 'shared/phrases'
import {useAuth} from 'hooks'
import {useFormik} from 'formik'
import * as yup from 'yup'

interface AuthField {
  login: string
  password: string
}

const initialValues: AuthField = {
  login: '',
  password: '',
}

const validationSchema = yup.object().shape({
  login: yup.string().required('Login is required'),
  password: yup.string().required('Password is required'),
})

export const Login = () => {
  const {login, isFetching} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  async function onSubmit(values: AuthField) {
    try {
      await login(values)
    } catch {
      // action.setErrors()
      Alert.alert('', 'Wrong password')
    }
  }

  return (
    <UI.Layout>
      <UI.DefaultInput
        placeholder="Login"
        onChangeText={formik.handleChange('login')}
        value={formik.values.login}
      />
      <UI.Font>{formik.errors.login}</UI.Font>
      <UI.DefaultInput
        placeholder="Password"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
      />
      <UI.Font>{formik.errors.password}</UI.Font>
      <UI.Button
        loading={isFetching}
        title={s.login}
        onPress={formik.handleSubmit}
      />
      <UI.Font>{'Pass: admin'}</UI.Font>
    </UI.Layout>
  )
}
