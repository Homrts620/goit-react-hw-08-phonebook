import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <address className={css.address}>
          <p className={css.paragraph}>PhoneBook Website</p>
        </address>
      </div>
    </footer>
  );
};
