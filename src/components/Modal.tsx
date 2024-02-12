import { Card } from './ui/card';
import styles from './Modal.module.scss';
import { forwardRef } from 'react';
import { Button } from './ui/button';

const Modal: React.FunctionComponent = forwardRef((props, ref) => {
  const info = () => {
    console.log(ref.current);
    ref.current.close();
  };
  return (
    <dialog className={styles.dialog} ref={ref}>
      <Card className="p-[20px]">
        {props.children}
        <Button onClick={info}>close</Button>
      </Card>
    </dialog>
  );
});

export default Modal;
