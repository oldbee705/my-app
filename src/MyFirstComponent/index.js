import Avatar from '../Avatar';

function Profile() {
  return (
    <>
      <Avatar
        size={200}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2s'
        }}
      />
      <Avatar
        size={150}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lhs'
        }}
      />
      <Avatar
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6s'
        }}
      />
    </>
  );
}

export default Profile;