import axios from 'axios';

export function getBoard() {
  return axios.get('http://localhost:5001/board');
}

export function getboardById(id) {
  return axios.get(`http://localhost:5001/board/${id}`);
}

export function postBoard(data) {
  return axios.post('http://localhost:5001/board', data);
}

export function updateBoard(id, data) {
  return axios.patch(`http://localhost:5001/board/${id}`, data);
}

export function deleteBoard(id) {
  return axios.delete(`http://localhost:5001/board/${id}`);
}
