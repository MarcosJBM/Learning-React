export type CommentProps = {
  author: {
    avatarURL: string;
    name: string;
  };
  text: string;
  date: Date;
};

export type AvatarProps = {
  avatarURL: string;
  name: string;
};
