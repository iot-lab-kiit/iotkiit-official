import React from 'react';
import style from '../../styles/Announcement.module.css';

const Announcement = () => {
  return (
    <div className={style.temp}>
      <div className={style.background}>
        <div className={style.temp4}>
          <div className={style.icon}>
            <img src='/images/innovance-icon-dark-small.png' alt='' />
          </div>
          <div className={style.vertical}></div>
          <div className={style.title}>
            INNOVANCE 2.0
          </div>
        </div>

        <div className={style.text}>
          <div className={style.temp2}>
            <div className={style.lines}>November 18th - 19th </div>
            <div className={`${style.lines} ${style.belowLine}`}>Campus 7 & 17</div>
          </div>
          <div className={style.temp3}>
            <button className={style.button}>
              <a
                href='https://innovance.iotkiit.in'
                target='_blank'
                rel='noopener noreferrer'
                className={style.link}
              >
                Register
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
