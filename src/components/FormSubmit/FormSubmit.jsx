import {
  Form,
  Button,
  Input,
  ButtonLabel,
  FormContainer,
} from './FormSubmit.styled';

export const FormSubmit = ({ searchMovie }) => {
  return (
    <FormContainer>
      <Form onSubmit={searchMovie}>
        <Input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>
      </Form>
    </FormContainer>
  );
};
