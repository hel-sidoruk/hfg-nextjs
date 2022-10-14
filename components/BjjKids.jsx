import GroupItem from './GroupItem';
import Text from './UI/Text';
import Title from './UI/Title';
import styles from '../styles/discipline.module.scss';
import Link from 'next/link';

const BjjKids = () => {
  return (
    <>
      <div className={styles.group}>
        <GroupItem
          title={'Детская группа (4-10 лет)'}
          time={'18:30'}
          days={'Понедельник, среда, пятница'}
          trainer={'Никита Сахно'}
        />
        <GroupItem
          title={'Детская группа (10-14 лет)'}
          time={'19:00'}
          days={'Вторник, четверг'}
          trainer={'Евгений Акулич'}
        />
      </div>
      <div className={styles.btnBox}>
        <Link href="/contacts">
          <a className={`btn btn-fill ${styles.btn}`}>
            Записаться на тренировку
          </a>
        </Link>
      </div>
      <div className="discipline-info">
        <Text>
          Бразильское джиу-джитсу — это боевое искусство и международное
          спортивное единоборство. Его основа - борьба в партере, использование
          принципов рычагов, углов, давления и тайминга. В отличие от других
          боевых искусств, которые сосредотачиваются на ударах и/или ударах
          ногами, джиу-джитсу фокусируется на контактных захватах и контроле
          противника, а также на применении удушающих и болевых приемов.
        </Text>
        <Title>
          Почему ребенку полезно заниматься бразильским джиу-джитсу?
        </Title>
        <Text>
          Бразильское джиу-джитсу поможет проявить уникальные черты и
          способности вашего ребенка.
        </Text>
        <Text>
          Занимаясь в секции бразильского джиу-джитсу ребенок становится
          физически сильнее, координированее, быстрее учится техникам борьбы.
          Здесь дети учатся шагать навстречу своим страхам, борясь с сильным
          соперником. Тренируя технические действия они учатся терпению, ведь
          только благодаря длительной и кропотливой работе технический прием
          сработает - он должен быть доведен до автоматизма.
        </Text>
        <Text>
          Бразильское джиу-джитсу развивает базовые спортивные навыки. Это такой
          вид спорта, который требует очень серьезного контроля над своим телом.
          В секции бразильского джиу-джитсу активно практикует элементы
          акробатики во время разминки. На тренировках используются множество
          элементов из гимнастики, акробатики и динамической йоги.
        </Text>
        <Text>
          Бразильское джиу-джитсу развивает психологическую устойчивость.
          Выступление на турнирах и в тренировочных схватках, в которых ваш
          ребенок учится справляться с сильным сопреником, учат его не пасовать
          перед трудностями и сражаться до победы.
        </Text>
        <Text>
          Бразильское джиу-джитсу развивает дисциплину. Регулярное посещение
          тренировок требует от ребенка проявления сознательности и дисциплины и
          формирует его как личность, которая учится ответственно решать
          повседневные вопросы.
        </Text>
        <Text>
          Бразильское джиу-джитсу объединяет и развивает прочность товарищества.
          Дети поддерживают своих одноклубников в учебных схватках, переживают
          за них и поддерживают. Дружба зародившееся в спортивном зале- это
          дружба на всю жизнь.
        </Text>
        <Text>
          В основе детских тренировок лежит соревновательно-игровой метод. Это
          один из основных методов обучения детей в борьбе.
          Соревновательно-игровой метод исключает принуждение: обучение идет
          через игру и соревнование. Он вызывает у детей радость, способствует
          движению вперед, обеспечивает постепенное развитие волевых качеств,
          личной ответственности, веру в возможность преодолеть трудности.
          Обновление физического воспитания немыслимо без коренного изменения
          отношения к нему. Инструкторам предоставляется широкая возможность
          более разнообразно использовать средства и методы, которые позволяют
          выполнять большинство физически трудных упражнений легко, как бы играя
          и соревнуясь. Таким образом преодолевается монотонность занятий,
          присутствие которой делает скучным и однообразным процесс закрепления
          технических действий в борьбе.
        </Text>
      </div>
    </>
  );
};

export default BjjKids;
