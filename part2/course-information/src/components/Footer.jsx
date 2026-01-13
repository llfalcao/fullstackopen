const Footer = ({ parts }) => {
  const totalExercises = parts.reduce(
    (sum, part) => (sum += part.exercises),
    0,
  );

  return (
    <p>
      <b>Total of {totalExercises} exercises</b>
    </p>
  );
};

export default Footer;
