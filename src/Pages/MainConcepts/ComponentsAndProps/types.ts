export interface CommentProps {
  author: {
    avatarURL: string;
    name: string;
  };
  text: string;
  date: Date;
}

export interface AvatarProps {
  avatarURL: string;
  name: string;
}
