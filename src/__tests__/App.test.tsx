import {describe, expect, test} from "vitest"
import { render, screen } from '@testing-library/react'
import App from "../App"

describe("Movie Search List", () => {
    test("renders title and search bar", () => {
        render(<App />);

        const title = screen.getByText("Movie search page");

        const button = screen.getByRole("button", {"name": "Search"});

        const input = screen.getByPlaceholderText("Search Movie..")

        expect(title).toBeInTheDocument()
        expect(button).toBeInTheDocument()

    })
})