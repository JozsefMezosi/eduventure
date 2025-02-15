import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home from "./page";

describe("homepage", () => {
  it("should render an h1 with the text homepage", async () => {
    const { findByText } = render(<Home />);
    expect(await findByText("Homepage")).toBeDefined();
  });
});
