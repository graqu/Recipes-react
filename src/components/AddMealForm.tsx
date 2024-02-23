import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import TheHeading from './TheHeading';
import mealDataT from '@/models/formData';

type TProps = {
  onAdd: (data: mealDataT) => void;
  onEdit: (id: string, data: mealDataT) => void;
  editMode: boolean;
  item: {
    id: string;
    title: string;
    ingredients: string;
    reciepe: string;
  };
};

const AddMealForm: React.FunctionComponent<TProps> = ({
  onAdd,
  onEdit,
  editMode = false,
  item = {
    id: '',
    title: '',
    ingredients: '',
    reciepe: '',
  },
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      ingredients: '',
      reciepe: '',
    },
    values: {
      title: item.title,
      ingredients: item.ingredients,
      reciepe: item.reciepe,
    },
  });

  const submitHandler = (data: mealDataT) => {
    if (!editMode) {
      onAdd(data);
    } else {
      onEdit(item.id, data);
    }
    reset();
  };

  const editState = editMode;

  return (
    <>
      <TheHeading>{!editState ? 'Add new Meal' : 'Edit Meal info'}</TheHeading>
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
          {...register('reciepe', {
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
        <p className="text-[tomato]">{errors.reciepe?.message}</p>
        <Button type="submit">{!editState ? 'Send' : 'submit edition'}</Button>
      </form>
    </>
  );
};

export default AddMealForm;
