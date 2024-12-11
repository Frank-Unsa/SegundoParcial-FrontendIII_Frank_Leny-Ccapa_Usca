import { useState } from "react";
import InputField from "./InputField";
import styles from "./FormContact.module.css";

function FormContact({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, message });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={styles.formContainer}
      data-testid="contact-form"
      role="form"
    >
      <InputField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="name-input"
      />
      <InputField
        label="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        data-testid="email-input"
      />
      <InputField
        label="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        data-testid="message-input"
      />
      <button type="submit" className={styles.submitButton} data-testid="submit-button">
        Enviar
      </button>
    </form>
  );
}

export default FormContact;