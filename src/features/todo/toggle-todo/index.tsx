import { Checkbox } from 'antd';
import { ReactElement } from 'react';
import { ITodo } from '../../../shared/helpers/types';

interface IToggleItem {
  item: ITodo,
  children: ReactElement,
}

const ToggleTodo = ({ children, item }: IToggleItem) => {
  return (
    <Checkbox
      onChange={() => item.toggleCompleted()}
      defaultChecked={item.completed}
    >
      {children}
    </Checkbox>
  )
}

export default ToggleTodo;