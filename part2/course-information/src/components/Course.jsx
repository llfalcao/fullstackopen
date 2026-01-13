import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Course = ({ course }) => {
  const { name, parts } = course;

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Footer parts={parts} />
    </div>
  );
};

export default Course;
