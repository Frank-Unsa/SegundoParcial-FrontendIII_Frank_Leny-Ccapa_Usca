import styles from "./CardFormulario.module.css";

function CardFormulario({ data }) {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>Mensaje Enviado</h2>
      <p className={styles.cardInfo}>
        <strong>Nombre:</strong> {data.name}
      </p>
      <p className={styles.cardInfo}>
        <strong>Correo Electrónico:</strong> {data.email}
      </p>
      <p className={styles.cardInfo}>
        <strong>Mensaje:</strong> {data.message}
      </p>
    </div>
  );
}

export default CardFormulario;