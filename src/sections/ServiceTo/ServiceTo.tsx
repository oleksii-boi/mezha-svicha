import styles from './ServiceTo.module.scss';

export const ServiceTo = () => {
  return (
    <section className={styles.sectionContainer}>
      <section className={styles.innerContainer}>
        <h1>ЯК ТА З КИМ МИ ПРАЦЮЄМО</h1>

        <section className={styles.mobile}>
          <div className={styles.row1}>
            <div className={styles.box1}>
              Відпочинкові <br />
              комплекси
            </div>
            <div className={styles.box2}>
              Кафе, <br /> ресторани
            </div>
            <div className={styles.box3}></div>
          </div>
          <div className={styles.row2}>
            <div className={styles.box1}></div>
            <div className={styles.box2}>
              Державні заклади <br />
              харчування
            </div>
            <div className={styles.box3}></div>
          </div>
          <div className={styles.row3}>
            <div className={styles.box1}>
              Крамниці,
              <br />
              еко-магазини
            </div>
            <div className={styles.box2}>
              Овочеві лавки <br />
              на ринках
            </div>
          </div>
          <div className={styles.row4}>
            <div className={styles.box1}></div>
            <div className={styles.box2}>
              Індивідуальні клієнти, <br /> домогосподарства
            </div>
          </div>
        </section>
        <section className={styles.desktop}>
          <div className={styles.row1}>
            <div className={styles.box1}></div>
            <div className={styles.box2}>
              Відпочинкові <br />
              комплекси
            </div>
            <div className={styles.box3}>
              Кафе, <br /> ресторани
            </div>
            <div className={styles.box4}>
              Крамниці,
              <br />
              еко-магазини
            </div>
            <div className={styles.box5}></div>
          </div>

          <div className={styles.row2}>
            <div className={styles.box1}></div>
            <div className={styles.box2}>
              Овочеві лавки <br />
              на ринках
            </div>
            <div className={styles.box3}>
              Державні заклади <br />
              харчування
            </div>
            <div className={styles.box4}>
              Індивідуальні клієнти, <br /> домогосподарства
            </div>
            <div className={styles.box5}></div>
          </div>
        </section>
      </section>
    </section>
  );
};
