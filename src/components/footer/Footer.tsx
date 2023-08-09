import { FC } from 'react';

import style from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <div>&#169; Всі права захищені</div>
            <a href="mailto:vadimsavchuk1999@gmail.com" type="email" target='_black'>&#9733; Зв'язатись з нами</a>
        </footer>
    )
}

export default Footer