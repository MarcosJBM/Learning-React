import { UserProfile } from './components';

export const JSXInDepth = () => {
  const imageURL =
    'https://avatars1.githubusercontent.com/u/67931411?s=460&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4';

  return (
    <div>
      <h1>JSX In Depth</h1>
      <UserProfile.AvatarImage
        avatar={{
          image: imageURL,
          description: 'Marcos Lindão',
        }}
      />
      <UserProfile.UserName name={'Marcos'} />
      <UserProfile.UserDescription description={'Gosto de Pepsi'} />
    </div>
  );
};
