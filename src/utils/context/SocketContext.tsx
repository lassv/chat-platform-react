import { createContext } from 'react';
import { io } from 'socket.io-client';

export const socket = io("chat-platform-nestjs-production.up.railway.app"!, {
  withCredentials: true,
});
export const SocketContext = createContext(socket);
