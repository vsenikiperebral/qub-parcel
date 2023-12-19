import css from './Nav.module.css';

export const Nav = () => {
  return (
    <div className={css.nav}>
      <ul className={css.left}>
        <li><a href="google.com">о нас</a></li>
        <li><a href="google.com">партнеры</a></li>
      </ul>
      <ul className={css.right}>
        <li><a href="google.com">контакты</a></li>
        <li><a href="google.com">язык</a></li>
      </ul>
    </div>
  );
};