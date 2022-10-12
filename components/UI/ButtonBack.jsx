// import Arrow from '../../assets/arrow.svg';

import Link from 'next/link';

const ButtonBack = ({ link }) => {
  return (
    <Link href={link}>
      <a className="btn-back btn-fill">Назад</a>
    </Link>
  );
};

export default ButtonBack;
