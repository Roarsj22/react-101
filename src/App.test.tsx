import { expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

it("should have an initial count of 0", async () => {
  render(<App/>);

  //act

  expect(screen.getByRole("button", {name: /count is 0/i})).toBeInTheDocument();
});

it("should increment when clicked", async () => {
    const user = userEvent.setup();
    render(<App/>);
  
    //act
    const button = screen.getByRole("button", {name: /count is 0/i});
    await user.click(button);
  
    expect(screen.getByRole("button", {name: /count is 1/i})).toBeInTheDocument();
});


it("should increment when clicked", async () => {
    const user = userEvent.setup();
    render(<App/>);
    
    //act
    const button = screen.getByRole("button", {name: /count is 0/i});
    await user.click(button);
    
    expect(screen.queryByRole("button", {name: /count is 0/i})).not.toBeInTheDocument();
});

it("should increment when clicked", async () => {
    const user = userEvent.setup();
    render(<App/>);
    
    //act
    const button = screen.getByRole("button", {name: /count is 0/i});
    user.click(button);

    expect(await screen.findByRole("button", {name: /count is 1/i}));
});


it("should increment when clicked", async () => {
    const user = userEvent.setup();
    render(<App/>);
    
    //act
    const button = screen.getByRole("button", {name: /count is 0/i});
    user.click(button);

    await waitFor(() => {
        expect(screen.getByRole("button", {name: /count is 1/i}));
    }, {timeout: 5000});
});
