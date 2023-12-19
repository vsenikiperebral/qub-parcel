import css from './Logo.module.css';

export const Logo = () => {
  return (
    <a href="google.com">
        <div className={css.logo}>
      <div className={css.q}></div>
      <div className={css.u}></div>
      <div className={css.b}></div>
    </div>
    </a>
  );
};