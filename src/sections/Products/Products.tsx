import styles from './Products.module.scss';

export const Products = () => {
  return (
    <section className={styles.sectionContainer} id="products">
      <h2>ПРОДУКЦІЯ</h2>

      <section className={styles.imgSection}>
        <article>
          <h3>Різні сорти картоплі</h3>
        </article>
        <article>
          <h3>Морква, буряк, батат</h3>
        </article>
        <article>
          <h3>Баштанні культури, спаржа</h3>
        </article>
      </section>
    </section>
  );
};
