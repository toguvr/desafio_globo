import React, { FormEvent, useCallback, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Slider from '../../../components/Slider';
import { StateProps, UserProps } from '../../../dtos';
import api from '../../../services/api';
import getValidationErrors from '../../../utils';
import { generateHash } from '../../../utils/hash';
import { Content } from './styles';

interface SliderProps {
  close: () => void;
  getUsers: () => void;
  userToEdit: UserProps;
}

function UserSlider({ close, getUsers, userToEdit }: SliderProps) {
  const [values, setValues] = useState(
    userToEdit.id
      ? { email: userToEdit.email, role: userToEdit.role }
      : ({} as StateProps),
  );
  const [errors, setErrors] = useState<StateProps>({} as StateProps);
  const [loading, setLoading] = useState(false);
  const [see, setSee] = useState(false);

  const handleAccount = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        const schema = Yup.object().shape({
          role: Yup.string().required('Nível de acesso obrigatório'),
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

        const hashedPassword = await generateHash(values.password);
        {
          userToEdit.id
            ? await api.put(`/user/${userToEdit.id}`, {
                email: values.email,
                password: hashedPassword,
                role: values.role,
              })
            : await api.post('/user', {
                email: values.email,
                password: hashedPassword,
                role: values.role,
              });
        }

        getUsers();
        close();
        toast.success(
          userToEdit.id
            ? 'Usuário atualizado com sucesso'
            : 'Usuário cadastrado com sucesso',
        );
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setErrors(getValidationErrors(err));

          return;
        }
        if (err.response) {
          return toast.error(
            err.response.data.message ||
              'Ocorreu um erro ao fazer o cadastro, tente novamente',
          );
        }
        toast.error('Ocorreu um erro ao fazer o cadastro, tente novamente');
      } finally {
        setLoading(false);
      }
    },
    [values, userToEdit],
  );

  return (
    <Slider close={close}>
      <form onSubmit={handleAccount}>
        <h4>
          {userToEdit.id ? (
            <>
              <MdEdit /> Usuário{' '}
            </>
          ) : (
            '+ Usuário'
          )}
        </h4>
        <Content>
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
          <Select
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            error={errors.role}
            name="role"
            value={values.role}
          >
            <option disabled value="">
              -
            </option>
            <option value="default">Funcionário</option>
            <option value="admin">Administrador</option>
          </Select>
        </Content>
        <Button loading={loading} type="submit">
          {userToEdit.id ? 'Atualizar' : 'Criar'}
        </Button>
      </form>
    </Slider>
  );
}

export default UserSlider;
