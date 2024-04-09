export interface Comment {
  rpid: number | string;
  user: {
    uid: string | number;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
}
