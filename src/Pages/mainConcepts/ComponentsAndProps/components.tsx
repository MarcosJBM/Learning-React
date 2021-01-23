import React from "react";

import { formatDate } from "./functions";

import { CommentProps, AvatarProps } from "./type";

const Avatar = ({ avatarURL, name }: AvatarProps) => {
  return <img className='avatar' src={avatarURL} alt={name} />;
};

const UserInfo = ({ avatarURL, name }: AvatarProps) => {
  return (
    <div className='userInfo'>
      <Avatar avatarURL={avatarURL} name={name} />
      <div className='userInfo-name'>{name}</div>
    </div>
  );
};

const Comment = ({ author, text, date }: CommentProps) => {
  return (
    <div className='comment'>
      <UserInfo avatarURL={author.avatarURL} name={author.name} />
      <div className='commentText'>{text}</div>
      <div className='commentDate'>{formatDate(date)}</div>
    </div>
  );
};

export { Comment };
