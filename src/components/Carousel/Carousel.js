import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import classNames from 'classnames';
import AngleRight from '../../img/angle-right.inline.svg';
import AngleLeft from '../../img/angle-left.inline.svg';
import styles from './Carousel.module.scss';

export default ({ items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div
      style={{
        padding: `0 ${chevronWidth}px`,
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={10}
        leftChevron={
          <div className={styles.arrow}>
            <AngleLeft />
          </div>
        }
        rightChevron={
          <div className={styles.arrow}>
            <AngleRight />
          </div>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {items.map(item => (
          <div className={classNames(styles.carouselItem)}>
            <figure className="image">
              <img
                className={styles.carouselImage}
                src={item.img}
                alt={item.title}
              />
            </figure>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};
