import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { FormEvent } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { StateProps } from '../../dtos';
import { useAuth } from '../../hooks/auth';
import { routes } from '../../routes';
import getValidationErrors from '../../utils';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

type SignInFormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [values, setValues] = useState<SignInFormData>({} as SignInFormData);
  const [errors, setErrors] = useState<StateProps>({} as StateProps);
  const [loading, setLoading] = useState(false);
  const [see, setSee] = useState(false);
  const auth = useAuth();

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setErrors({});

      setLoading(true);
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Email inválido')
            .required('Email obrigatório'),
          password: Yup.string().min(
            6,
            'A senha deve conter no mínimo 6 dígitos',
          ),
        });

        await schema.validate(values, {
          abortEarly: false,
        });

        await auth.signIn({
          email: values.email,
          password: values.password,
        });

        history.push(routes.dashboard);

        return toast.success('Autenticado com sucesso');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setErrors(getValidationErrors(err));

          return;
        }
        if (err.response) {
          return toast.error(
            err.response.data ||
              err.response.data.message ||
              'Ocorreu um erro ao fazer login, cheque as credenciais',
          );
        }
        toast.error('Ocorreu um erro ao fazer login, cheque as credenciais');
      } finally {
        setLoading(false);
      }
    },
    [auth, history, values],
  );
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Desafio Globo</h2>
        <div>
          <Input
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            value={values.email}
            error={errors.email}
            name="email"
            type="email"
            margin="0 0 16px 0"
            placeholder="E-mail"
          />
          <Input
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            value={values.password}
            error={errors.password}
            name="password"
            type={see ? 'text' : 'password'}
            icon={
              see ? (
                <FiEyeOff
                  size={20}
                  cursor="pointer"
                  onClick={() => setSee(!see)}
                />
              ) : (
                <FiEye
                  size={20}
                  cursor="pointer"
                  onClick={() => setSee(!see)}
                />
              )
            }
            placeholder="Senha"
          />
        </div>
        <Button loading={loading} type="submit">
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
