import { create } from 'zustand';

export const botanistUser = {
  id: 1,
  firstName: 'user',
  lastName: 'botanist',
  mail: 'botanist@mail.com',
  password: 'botanist',
  isBotanist: true
};

export const botanistUser2 = {
  id: 2,
  firstName: 'user2',
  lastName: 'botanist',
  mail: 'botanist2@mail.com',
  password: 'botanist',
  isBotanist: true
};

export const casualUser = {
  id: 10,
  firstName: 'user',
  lastName: 'casual',
  mail: 'user@mail.com',
  password: 'user',
  isBotanist: false
};

export const casualUser2 = {
  id: 11,
  firstName: 'userZ',
  lastName: 'casual',
  mail: 'userZ@mail.com',
  password: 'user',
  isBotanist: false
};

export const defaultUsers = [botanistUser, botanistUser2, casualUser, casualUser2];

export const useUsersStore = create((set, get) => ({
  users: defaultUsers,
  getById: (userId) => get().users.find((user) => user.id === userId),
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
  updateUser: (updatedUser) =>
    set((state) => ({ users: state.users.map((user) => (user.id === updatedUser.id ? updatedUser : user)) })),
  removeUser: (id) => set((state) => ({ users: state.users.filter((user) => user.id !== id) }))
}));
