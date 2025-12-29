const Footer = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    sum += part.exercises;
    return sum;
  }, 0);

  return <p>Number of exercises {totalExercises}</p>;
};

export default Footer;
