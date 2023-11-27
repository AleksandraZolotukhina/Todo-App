import { observer } from "mobx-react-lite";
import { ITodo } from "../../../shared/helpers/types";
import { List, Typography } from "antd";
import ToggleTodo from "../../../features/todo/toggle-todo";
import DeleteTodo from "../../../features/todo/delete-todo";

const { Text } = Typography;

interface ITodoItem {
  item: ITodo,
}

const Todo = observer(({ item }: ITodoItem) => {
  return (
    <List.Item key={item.id}>
      <ToggleTodo item={item}>
        {
          item.completed ?
            <Text delete>{item.text}</Text> :
            <Text>{item.text}</Text>
        }
      </ToggleTodo>
      <DeleteTodo id={item.id} />
    </List.Item>
  )
})

export default Todo;