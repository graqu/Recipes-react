import { useState } from 'react';
import { Card } from './ui/card';

const MealItem: React.FunctionComponent<{
  name: String;
  ingredients: String;
}> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <Card className="p-[10px] my-[14px]">
        <div className="flex justify-between">
          <div>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setIsOpen((state) => (state = !state));
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        {isOpen && (
          <div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                modi repudiandae harum illo sunt assumenda voluptatem amet
                quisquam. Esse, minima.
              </p>
            </div>
            <div>
              <div
                onClick={() => {
                  console.log('edytuj');
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
              <div
                className="recipe-modify-icon recipe-remover"
                onClick={() => {
                  console.log('usuń');
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
        )}
      </Card>
    </li>
  );
};

export default MealItem;
