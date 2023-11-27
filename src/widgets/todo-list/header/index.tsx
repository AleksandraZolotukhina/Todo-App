import { Flex } from "antd"
import CreateTodo from "../../../features/todo/create-todo"
import Title from "antd/es/typography/Title"

const HeaderTodoList = () => {
  return (
    <Flex justify="space-between" align="center" wrap="wrap">
      <Title style={{ margin: 0 }}>Todo List</Title>
      <CreateTodo />
    </Flex>
  )
}

export default HeaderTodoList;