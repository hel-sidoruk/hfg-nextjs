// import Arrow from '../../assets/arrow.svg';

import Link from 'next/link';

const ButtonBack = ({ link }) => {
  return (
    <Link href={link}>
      <a className="btn-back btn-fill">
        {/* <img src={Arrow} alt="arrow" /> */}
      </a>
    </Link>
  );
};

export default ButtonBack;
