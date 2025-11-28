import styles from './Products.module.scss';

export const Products = () => {
  return (
    <section className={styles.sectionContainer} id="products">
      <h1>ПРОДУКЦІЯ</h1>

      <section className={styles.imgSection}>
        <div>
          <h4>Різні сорти картоплі</h4>
        </div>
        <div>
          <h4>Морква, буряк, батат</h4>
        </div>
        <div>
          <h4>Баштанні культури, спаржа</h4>
        </div>
      </section>
    </section>
  );
};
