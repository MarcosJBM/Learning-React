export type CommentProps = {
  author: {
    avatarURL: string;
    name: string;
  };
  text: string;
  date: Date;
};

export type AvatarProps = {
  user: {
    avatarURL: string;
    name: string;
  };
};
