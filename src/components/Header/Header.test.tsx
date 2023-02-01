import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";
import { fireEvent, render } from "@testing-library/react";

describe("Header", () => {
  it("should navigate to HomePage when Logo clicked", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const linkBtn = getByText("Rick and Morty");
    fireEvent.click(linkBtn);
    expect(linkBtn.getAttribute("href")).toEqual("/");
  });
});
