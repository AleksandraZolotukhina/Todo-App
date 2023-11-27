import { Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { useStore } from "../../../shared/hooks";

interface IDeleteItem {
  id: string,
}

const DeleteTodo = ({ id }: IDeleteItem) => {
  const { tasks } = useStore();

  const handleClick = () => {
    tasks.delete(id)
  }

  return (
    <Button
      type="text"
      icon={<DeleteTwoTone />}
      onClick={handleClick}
    />
  )
}

export default DeleteTodo;