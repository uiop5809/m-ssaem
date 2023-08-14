import { atom } from "recoil";
import { ChatMessage } from "../interfaces/chatting";

export const stompClientState = atom<any>({
  key: "stompClientState",
  default: null,
});

export const messageState = atom<ChatMessage[]>({
  key: "messageState",
  default: [],
});

export const activeRoomIdState = atom<number>({
  key: "activeRoomIdState",
  default: 1,
});
