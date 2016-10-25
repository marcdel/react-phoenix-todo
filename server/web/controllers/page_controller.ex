defmodule TodoServer.PageController do
  use TodoServer.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
