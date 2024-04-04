import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux"; // Import Provider
import configureStore from "redux-mock-store"; // Import configureStore
import { Navbar } from "../Components/Navbar";

const mockStore = configureStore([]); // Create a mock store

afterEach(cleanup);

const renderWithRouterAndStore = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Provider store={mockStore({})}>
        <BrowserRouter history={history}>{component}</BrowserRouter>
      </Provider>
    ),
  };
};

it("should render the home page", () => {
  const { container, getByTestId } = renderWithRouterAndStore(<Navbar />);
  const navbar = screen.getByTestId("navbar");
  const navlink = screen.getByTestId("RESUME TEMPLATES");

  expect(container.innerHTML).toMatch("RESUME TEMPLATES");
  expect(navbar).toContainElement(navlink);
});

it("should render the AboutUs Page", () => {
  const { container, getByTestId } = renderWithRouterAndStore(<Navbar />);
  const navbar = screen.getByTestId("navbar");
  const navlink = screen.getByTestId("ABOUT US");

  expect(container.innerHTML).toMatch("ABOUT US");
  expect(navbar).toContainElement(navlink);
});

it("should render the My Resume Page", () => {
  const { container, getByTestId } = renderWithRouterAndStore(<Navbar />);
  const navbar = screen.getByTestId("navbar");
  const navlink = screen.getByTestId("MY RESUMES");

  expect(container.innerHTML).toMatch("MY RESUMES");
  expect(navbar).toContainElement(navlink);
});
