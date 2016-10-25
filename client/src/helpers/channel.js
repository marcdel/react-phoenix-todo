import { Socket } from 'phoenix-js';

export function joinTodosChannel() {
  let socket = new Socket('ws://localhost:4000/socket');
  socket.connect();

  let channel = socket.channel('todos');

  channel.join()
    .receive('ok', messages => console.log('Updating client state:', messages))
    .receive('error', reason => console.log('Error joining todos:', reason))
    .after(10000, () => console.log('No response from server yet.'));

  return channel;
}
