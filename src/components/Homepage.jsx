import ListBooks from './ListBooks';
import FormBook from './FormBook';
import DeleteBook from './DeleteBook';

const Homepage = () => (
  <div className="pt-5 mt-5">
    <ListBooks />
    <DeleteBook />
    <FormBook />
  </div>
);

export default Homepage;
