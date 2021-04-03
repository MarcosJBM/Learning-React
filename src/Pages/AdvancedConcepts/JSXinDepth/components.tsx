import { AvatarProps } from './types';

export const UserProfile = {
  AvatarImage: ({ avatar }: AvatarProps) => {
    return (
      <img
        src={avatar.image}
        alt={avatar.description}
        width={250}
        height={250}
      />
    );
  },
  UserName: (props: { name: string }) => {
    return <h1>{props.name}</h1>;
  },
  UserDescription: (props: { description: string }) => {
    return <p>{props.description}</p>;
  },
};
