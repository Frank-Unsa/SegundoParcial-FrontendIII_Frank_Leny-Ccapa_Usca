import styles from "./InputField.module.css";

function InputField({ label, value, onChange, type = "text" }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        className={styles.inputField}
        type={type}
        value={value}
        onChange={onChange}
        role="textbox"
        data-testid={`${label}-input`}
      />
    </div>
  );
}

export default InputField;