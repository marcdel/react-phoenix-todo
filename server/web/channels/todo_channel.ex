
defmodule TodoServer.TodoChannel do
  use TodoServer.Web, :channel

  alias TodoServer.TodoAgent

  def join("todos", _params, socket) do
    todos = TodoAgent.all()

    {:ok, %{ todos: todos }, socket }
  end

  def handle_in("new:todo", params, socket) do
    todo = params["text"]
    TodoAgent.add(todo)

    broadcast! socket, "new:todo", %{
      text: todo
    }

    {:reply, :ok, socket}
  end
end
