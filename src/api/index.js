import axios from 'axios';
import {client_id, grant_type, client_secret, url} from './constans';

export function oauth(username, password) {
  return axios({
    method: 'POST',
    url: `${url}/oauth/token`,
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    data: JSON.stringify({
      grant_type: grant_type,
      client_id: client_id,
      client_secret: client_secret,
      username: username,
      password: password,
      theNewProvider: 'domiciliario',
    }),
  }).then((response) => response);
}
