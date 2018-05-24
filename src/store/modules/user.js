import { loginByUsername } from '../../service/api/login';

const user = {
  state: {},
  mutations: {},
  actions: {
    loginByUsername({ commit }, userInfo) {
      console.log(userInfo);
      return new Promise((resolve, reject) => {
        try {
          loginByUsername(userInfo).then((data) => {
            resolve(data);
          });
        } catch (error) {
          reject(error);
        }
      });
    },
  },
};

export default user;
