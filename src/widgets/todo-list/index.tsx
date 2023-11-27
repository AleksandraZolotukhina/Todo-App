import { List } from 'antd';
import { observer } from 'mobx-react-lite';
import HeaderTodoList from './header';
import FooterTodoList from './footer';
import { useStore } from '../../shared/hooks';
import Todo from './todo';

const TodoList = observer(() => {
  const { tasks } = useStore();

  return (
    <List
      header={<HeaderTodoList />}
      footer={<FooterTodoList />}
      size="large"
      bordered={true}
      pagination={{ position: 'bottom', align: "start", defaultPageSize: 9, style: { marginTop: -30 } }}
      dataSource={[...tasks.getTasks]}
      renderItem={(item) => (
        <Todo item={item} />
      )}
    />
  )
})

export default TodoList;