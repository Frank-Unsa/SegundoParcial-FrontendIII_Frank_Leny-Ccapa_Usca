import { useState } from "react";
import FormContact from "../components/Formulario/FormContact";
import CardFormulario from "../components/Formulario/CardFormulario";
import ErrorMessage from "../components/Formulario/ErrorMessage";

function ContactPage() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(false);

  const handleFormSubmit = (data) => {
    if (!data.name || data.name.length < 3 || !data.message || data.message.length < 10) {
      setError(true);
      setFormData(null);
    } else {
      setError(false);
      setFormData(data);
    }
  };

  return (
    <div>
      <h1 data-testid="contact-page-title">Formulario de Contacto</h1>
      <FormContact onSubmit={handleFormSubmit} />

      {error && <ErrorMessage message="Por favor, completa todos los campos correctamente." />}

      {formData && <CardFormulario data={formData} />}
    </div>
  );
}

export default ContactPage;