import { Card } from './ui/card';
import { Button } from './ui/button';

const MealItem: React.FunctionComponent<{
  id: string;
  name: string;
  ingredients: string;
  reciepe: string;
  openedRecipe: string;
  onExtend: (id: string) => void;
  onRemove: (id: string) => void;
}> = (props) => {
  const extendHandler = () => {
    props.onExtend(props.id);
  };

  const deleteHandler = () => {
    props.onRemove(props.id);
  };
  const editHandler = () => {
    console.log('edytuję', props.id);
  };

  return (
    <li>
      <Card className="p-[10px] my-[14px]">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[2rem] italic">{props.name}</h3>
            <p>{props.ingredients}</p>
          </div>
          <div className="cursor-pointer " onClick={extendHandler}>
            <i className="fa-solid fa-plus hover:text-[gray]"></i>
          </div>
        </div>
        {props.openedRecipe === props.id && (
          <Card className="p-[14px] mt-[16px]">
            <div className="p-[10px] bg-gray-50 rounded-[6px]">
              <p>{props.reciepe}</p>
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="mx-[10px] mt-[10px]"
                onClick={editHandler}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </Button>
              <Button
                variant="outline"
                className="mx-[10px] mt-[10px]"
                onClick={deleteHandler}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </Card>
        )}
      </Card>
    </li>
  );
};

export default MealItem;
