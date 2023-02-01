import { SnackBarMessage } from "./SnackBarMessage";
import { waitFor } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

describe("SnackBar", () => {
  it("should render the text", () => {
    const text = "Example text";
    render(<SnackBarMessage text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should closes the snackbar when close button is clicked", async () => {
    const text = "Example text";
    render(<SnackBarMessage text={text} />);
    const closeBtn = screen.getByLabelText("close");
    fireEvent.click(closeBtn);
    await waitFor(() => {
      expect(closeBtn).not.toBeInTheDocument();
    });
  });
});
