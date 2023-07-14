

export const FormSubmit = ({ searchMovie }) => {

  return (
    <form onSubmit={searchMovie}>
      <input type="text" name="search" />
      <button>Search</button>
    </form>
  );
};
