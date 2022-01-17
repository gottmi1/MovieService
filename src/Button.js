import propTypes from "prop-types";
import styles from "./Button.module.css";
// css 를 모듈화 시켜서, 이미 css가 만들어진 요소들을 불러와서 넣어줄 수 있게한다.

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.prototype = {
  text: propTypes.string.isRequired,
};

export default Button;
