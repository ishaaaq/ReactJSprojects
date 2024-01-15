import React from 'react';

const Menu = ({items}) => {
  return (
  <div className='section-center'>
    {items.map((item) => {
      const{id, price, desc, title, category, img} = item
      return(
        <article key={id} className='menu-item'>
          <img src={img} alt={title} className='photo'></img>
          <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>${price}</h4>
          </header>
          <div className='item-text'> {desc}</div>
          </div>
        </article>
      )
    })}
  </div>
  )
};

export default Menu;
