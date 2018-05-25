import { loginByUsername } from '../../service/api/login';
import { setToken } from '../../util/auth';

const user = {
  state: {
    token: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    loginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        try {
          loginByUsername(userInfo).then((response) => {
            const { data } = response;

            commit('setToken', data.token);
            // save token to cookie
            setToken(data.token);
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
