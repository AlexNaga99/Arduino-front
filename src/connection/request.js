import { request } from '../connection/index';

const getTemperature = {
  get: () => {
    return  request.get();
  },
}

export { getTemperature }