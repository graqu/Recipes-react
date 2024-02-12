import { useForm } from 'react-hook-form';
import { Button } from './ui/button';

const AddMealForm: React.FunctionComponent<{ onAdd: (data: {}) => void }> = (
  props,
) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: 'meal',
      description: 'unknown recipe',
    },
  });

  const title = watch('title');

  const submitHandler = (data) => {
    props.onAdd(data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        submitHandler(data);
      })}
    >
      <input
        className="block border m-2"
        {...register('title', { required: 'this is required' })}
        placeholder="title"
      />
      <p>{title}</p>
      <p>{errors.title?.message}</p>
      <input
        className="block border m-2"
        {...register('description', {
          required: 'this is required',
          minLength: {
            value: 4,
            message: 'that one needs more than 4 letters',
          },
        })}
        placeholder="description"
      />
      <p>{errors.description?.message}</p>
      <Button type="submit">Send</Button>
    </form>
  );
};

export default AddMealForm;
