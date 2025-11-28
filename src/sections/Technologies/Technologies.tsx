import styles from './Technologies.module.scss';
import Tech1 from '../../assets/tech-1.svg';
import Tech2 from '../../assets/tech-2.svg';
import Tech3 from '../../assets/tech-3.svg';
import Tech4 from '../../assets/tech-4.svg';
import Tech5 from '../../assets/tech-5.svg';

const data = [
  {
    img: Tech1,
    title: 'Ґрунт і насіння',
    desc: ' — аналіз ґрунту, сівозміна, підбір сортів під наші поля та клімат. Використовуємо сертифіковане насіння й здоровий посадковий матеріал.',
  },
  {
    img: Tech2,
    title: 'Живлення й збалансоване внесення добрив за потребою поля',
    desc: ' — економія води й рівномірне живлення, інтегрований захист рослин.',
  },
  {
    img: Tech3,
    title: 'Збирання та доробка',
    desc: ' — в оптимальну фазу стиглості, сортування, калібрування, м’яка доробка продукції.',
  },
  { img: Tech4, title: 'Зберігання', desc: ' — з контролем температури та вологості.' },
  {
    img: Tech5,
    title: 'Відповідальність',
    desc: ' — через мінімізацію відходів, ощадливе використання ресурсів, безпечні умови праці.',
  },
];

export const Technologies = () => {
  return (
    <section className={styles.sectionContainer} id="technologies">
      <section className={styles.innerContainer}>
        <h1>ТЕХНОЛОГІЯ</h1>
        <p className={styles.techDesc}>
          Працюємо з найвищою відповідальністю та повагою: до людей, до землі, до якості та
          прозорості і процесів.
        </p>
        <section className={styles.techCards}>
          {data.map((item, index) => (
            <section key={index} className={styles.techCard}>
              <img src={item.img} alt={`${item.title} - технологія вирощування овочів`} />
              <p>
                <strong>{item.title}</strong>
                {item.desc}
              </p>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};
