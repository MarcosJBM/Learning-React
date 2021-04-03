import { formatDate } from './functions';

import { CommentProps, AvatarProps } from './types';

const Avatar = ({ avatarURL, name }: AvatarProps) => {
  return <img src={avatarURL} alt={name} />;
};

const UserInfo = ({ avatarURL, name }: AvatarProps) => {
  return (
    <div>
      <Avatar avatarURL={avatarURL} name={name} />
      <div>{name}</div>
    </div>
  );
};

export const Comment = ({ author, text, date }: CommentProps) => {
  return (
    <div>
      <UserInfo avatarURL={author.avatarURL} name={author.name} />
      <div>{text}</div>
      <div>{formatDate(date)}</div>
    </div>
  );
};
