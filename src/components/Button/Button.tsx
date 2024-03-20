import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "danger" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button
        color={color}
        onClick={onClick}
        className={[styles.btn, styles["btn-" + color]].join(" ")}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
