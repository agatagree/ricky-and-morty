import { ErrorHandler } from "./ErrorHandler";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("ErrorHandler", () => {
  it("should render a loader when loading is true", () => {
    render(<ErrorHandler error={null} loading={true} data={undefined} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should render an empty state text when there is no data", () => {
    render(
      <ErrorHandler
        error={null}
        loading={false}
        data={{ error: "Character not found" }}
      />
    );
    expect(
      screen.getByText("Sorry, there is no character matching your criteria.")
    ).toBeInTheDocument();
  });

  it("should render an error text when there is an error", () => {
    render(
      <ErrorHandler
        error={"Failed to fetch"}
        loading={false}
        data={undefined}
      />
    );
    expect(screen.getByText("Sorry, an error occurs")).toBeInTheDocument();
  });
});
