function Avatar({ size = 100, person }) {

  function getImageUrl(imageId) {
    return (
      'https://i.imgur.com/' +
      imageId +
      '.jpg'
    );
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
    />
  );
}

export default Avatar