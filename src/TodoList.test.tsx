import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";

it("should display the todo items", async () => {
  render(<TodoList />);

  const todoItems = screen.getAllByRole("listitem");

  expect(todoItems).toHaveLength(2);
});
