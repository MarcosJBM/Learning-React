export interface CommentProps {
  author: {
    avatarURL: string;
    name: string;
  };
  text: string;
  date: Date;
}

export interface AvatarProps {
  user: {
    avatarURL: string;
    name: string;
  };
}
