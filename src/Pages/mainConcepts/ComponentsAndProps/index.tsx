import { Comment } from './components';

export const ComponentsAndProps = () => {
  const authorImage =
    'https://avatars1.githubusercontent.com/u/67931411?s=460&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4';

  return (
    <div>
      <Comment
        author={{ avatarURL: authorImage, name: 'Marcos' }}
        text={'Opa meu bom!'}
        date={new Date()}
      />
    </div>
  );
};
