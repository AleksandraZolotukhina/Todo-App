import { Layout } from "antd"
import TodoListPage from "../pages/todo-list"

const { Content } = Layout;


const App = () => {
  return (
    <>
      <Content style={{width: '80%', margin: '0 auto'}}>
        <TodoListPage />
      </Content>
    </>
  )
}

export default App;
