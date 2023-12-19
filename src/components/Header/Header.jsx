import { Wrapper } from 'components/Wrapper/Wrapper';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
        <Wrapper className={css.wrapper}>
        <Logo className={css.logo} />
        <Nav className={css.nav} />
        </Wrapper>
    </header>
  );
};
