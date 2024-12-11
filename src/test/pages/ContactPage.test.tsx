import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import ContactPage from "../../pages/ContactPage";
import userEvent from "@testing-library/user-event";
import React from "react";

afterEach(() => {
  cleanup();
});

describe("Test <ContactPage />", () => {
  test("Debe renderizar el formulario correctamente", () => {
    // Arrange
    render(<ContactPage />);

    // Act
    const inputName = screen.getByRole("textbox", { name: /nombre/i });
    const inputEmail = screen.getByRole("textbox", { name: /correo electrónico/i });
    const inputMessage = screen.getByRole("textbox", { name: /mensaje/i });
    const buttonSubmit = screen.getByRole("button", { name: /enviar/i });

    // Assert
    expect(inputName).toBeDefined();
    expect(inputEmail).toBeDefined();
    expect(inputMessage).toBeDefined();
    expect(buttonSubmit).toBeDefined();
  });

  test("Debe permitir escribir en los campos", async () => {
    // Arrange
    render(<ContactPage />);

    const user = userEvent.setup();
    const inputName = screen.getByRole("textbox", { name: /nombre/i });
    const inputEmail = screen.getByRole("textbox", { name: /correo electrónico/i });
    const inputMessage = screen.getByRole("textbox", { name: /mensaje/i });
    const buttonSubmit = screen.getByRole("button", { name: /enviar/i });

    // Act
    await user.type(inputName, "Frank Ccapa");
    await user.type(inputEmail, "fccapau@unsa.edu.pe");
    await user.type(inputMessage, "Este es un mensaje de prueba.");
    await user.click(buttonSubmit);

    // Assert
    expect(inputName.value).toBe("Frank Ccapa");
    expect(inputEmail.value).toBe("fccapau@unsa.edu.pe");
    expect(inputMessage.value).toBe("Este es un mensaje de prueba.");
  });

});
