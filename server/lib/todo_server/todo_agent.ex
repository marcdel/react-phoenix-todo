defmodule TodoServer.TodoAgent do
  def start_link do
    Agent.start_link(fn -> [] end, name: __MODULE__)
  end

  def all() do
    Agent.get(__MODULE__, fn todos -> todos end)
  end

  def add(text) do
    todo = %{
      :text => text,
      :completed => false
    }
    Agent.update(__MODULE__, fn todos -> todos ++ [todo] end)
  end
end
