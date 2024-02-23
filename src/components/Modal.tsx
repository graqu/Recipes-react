import { Card } from './ui/card';
import styles from './Modal.module.scss';
import { PropsWithChildren, ReactNode, forwardRef } from 'react';
import { Button } from './ui/button';

type Tprops = {
  children: PropsWithChildren<ReactNode>;
  onClose: () => void;
};

type Ref = HTMLDialogElement | null;

const Modal = forwardRef<Ref, Tprops>((props, ref) => {
  const info = () => {
    ref.current.close();
  };
  return (
    <dialog className={styles.dialog} ref={ref}>
      <Card className="p-[20px]">
        {props.children}
        <Button
          variant="destructive"
          onClick={!props.onClose ? info : props.onClose}
        >
          close
        </Button>
      </Card>
    </dialog>
  );
});

export default Modal;
