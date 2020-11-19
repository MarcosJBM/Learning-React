import React from "react";

import { CommentProps, AvatarProps } from "./type";

export function Welcome(props: { name: string }) {
  return <h3>Hello, {props.name}</h3>;
}

function formatDate(date: Date) {
  return date.toLocaleDateString();
}

export function Comment(props: CommentProps) {
  return (
    <div className='comment'>
      <UserInfo user={props.author} />
      <div className='commentText'>{props.text}</div>
      <div className='commentDate'>{formatDate(props.date)}</div>
    </div>
  );
}

function Avatar({ user }: AvatarProps) {
  return <img className='avatar' src={user.avatarURL} alt={user.name} />;
}

function UserInfo({ user }: AvatarProps) {
  return (
    <div className='userInfo'>
      <Avatar user={user} />
      <div className='userInfo-name'>{user.name}</div>
    </div>
  );
}
