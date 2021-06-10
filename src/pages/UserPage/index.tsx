import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { MdAdd, MdDeleteForever, MdEdit } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { Container, Circle } from './styles';
import { Header } from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import DialogModal from '../../components/DialogModal';
import api from '../../services/api';
import UserSlider from './UserSlider';
import { UserProps } from '../../dtos';

const UserPage: React.FC = () => {
  const [users, setUsers] = useState([] as UserProps[]);
  const [userToDelete, setUserToDelete] = useState({} as UserProps);
  const [loading, setLoading] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openUserSlider, setOpenUserSlider] = useState(false);
  const [userToEdit, setUserToEdit] = useState({} as UserProps);

  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get('/user');
      setUsers(response.data);
    } catch {
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteUser = useCallback(async () => {
    setLoading(true);
    try {
      await api.delete(`/user/${userToDelete.id}`);
      getUsers();
      setUserToDelete({} as UserProps);
      toast.success('Usuário deletado com sucesso.');
    } catch {
      toast.error('Não foi possível deletar, tente novamente.');
    } finally {
      setLoading(false);
    }
  }, [userToDelete]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <DialogModal
        openModal={openDelete}
        onSubmit={deleteUser}
        setOpenModal={setOpenDelete}
      />
      {openUserSlider && (
        <UserSlider
          userToEdit={userToEdit}
          close={() => setOpenUserSlider(false)}
          getUsers={getUsers}
        />
      )}

      <Header />
      <div className="content">
        <Sidebar />
        <div className="grid">
          <div className="box">
            <div>
              <span>
                Usuários{' '}
                {loading && (
                  <Loader
                    type="Audio"
                    color="var(--white)"
                    height={16}
                    width={16}
                  />
                )}
              </span>
              <Button
                width="120px"
                backgroundColor="var(--pink)"
                borderColor="var(--pink)"
                onClick={() => {
                  setOpenUserSlider(true);
                  setUserToEdit({} as UserProps);
                }}
              >
                <MdAdd />
                Usuário
              </Button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>USUÁRIO</th>
                  <th>admin</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>
                        <p>{user.email}</p>
                      </td>
                      <td>
                        <p>{user.role === 'admin' ? 'Sim' : 'Não'}</p>
                      </td>
                      <td>
                        <div>
                          <MdEdit
                            size={20}
                            cursor="pointer"
                            color="var(--purple)"
                            onClick={() => {
                              setOpenUserSlider(true);
                              setUserToEdit(user);
                            }}
                          />
                          <MdDeleteForever
                            onClick={() => {
                              setOpenDelete(true);
                              setUserToDelete(user);
                            }}
                            size={20}
                            cursor="pointer"
                            color="var(--red)"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserPage;
