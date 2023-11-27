import { Button, Flex, Form, Input } from "antd";
import { useStore } from "../../../shared/hooks";

const CreateTodo = () => {
  const { tasks } = useStore();
  const [form] = Form.useForm();

  const handleSubmit = ({ textTodo }: { textTodo: string }) => {
    tasks.add(textTodo)
    form.resetFields();
  };

  return (
    <Form
      name="create-item"
      form={form}
      onFinish={handleSubmit}
      initialValues={{ 'textTodo': '' }}
    >
      <Flex gap="small">
        <Form.Item
          name="textTodo"
          rules={[{ required: true, message: 'Please input text todo' }]}
        >
          <Input
            placeholder="Text todo"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
        >
          Create
        </Button>
      </Flex>
    </Form>

  )
}

export default CreateTodo;