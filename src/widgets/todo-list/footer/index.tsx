import { observer } from "mobx-react-lite"
import { useStore } from "../../../shared/hooks"
import { Flex } from "antd";

const FooterTodoList = observer(() => {
  const { tasks } = useStore();

  if (tasks.getCountAllTasks === 0) {
    return <></>
  }

  return (
    <Flex justify="end">
      done {tasks.getCountCompletedTasks} of {tasks.getCountAllTasks}
    </Flex>
  )
})

export default FooterTodoList;