import { useForm } from 'react-hook-form';
import { Button } from './ui/button';

const AddMealForm: React.FunctionComponent<{ onAdd: (data: {}) => void }> = (
  props,
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      ingredients: '',
      description: '',
    },
  });

  const submitHandler = (data: {}) => {
    reset();
    props.onAdd(data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        submitHandler(data);
      })}
    >
      <label htmlFor="title">name:</label>
      <input
        className="block border mb-2"
        {...register('title', { required: 'this is required' })}
        placeholder="title"
      />
      <p className="text-[tomato]">{errors.title?.message}</p>
      <label htmlFor="ingredients">ingredients:</label>
      <input
        className="block border mb-2"
        {...register('ingredients', {
          required: 'this is required',
          minLength: {
            value: 3,
            message: 'use more than 3 letters',
          },
          maxLength: 150,
        })}
        placeholder="ingredients"
      />
      <p className="text-[tomato]">{errors.ingredients?.message}</p>
      <label htmlFor="description">reciepe:</label>
      <textarea
        className="block border mb-4 w-full"
        {...register('description', {
          required: 'this is required',
          minLength: {
            value: 4,
            message: 'that one needs more than 4 letters',
          },
          maxLength: 250,
        })}
        placeholder="description"
        rows={4}
      />
      <p className="text-[tomato]">{errors.description?.message}</p>
      <Button type="submit">Send</Button>
    </form>
  );
};

export default AddMealForm;
