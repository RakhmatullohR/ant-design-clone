import React, { useState, useEffect } from 'react';

import { ReactComponent as ArrowDown } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg';
import { Container, Selection, Menu } from './style';

const Single = ({
  onClick, options, placeholder, marginRight, onChange, onSelect, size, ...args
}) => {
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const [width, setWidth] = useState(0);
  const [windowH] = useState(window.innerHeight);
  const [windowW] = useState(window.innerWidth);
  const [item, setItem] = useState(placeholder || options[0].value);
  const onClik = (e) => {
    setItem(e.target.value);
    onSelect ? onSelect(e.target.id) : console.log(e.target.value);
    setOpen(false);
    if (onClick) onClick(e.target.value);
  };
  const handleResize = (e) => {
    setWidth(e);
  };
  useEffect(() => {
    const vh = document.getElementById('dropdown-container').getBoundingClientRect();
    const wv = document.getElementById('selection-container').clientWidth;
    const menuHeight = document.getElementById('menu-container').clientHeight;

    window.addEventListener('resize', handleResize(wv));

    // setWidth(wv);
    if (vh.bottom + menuHeight > window.innerHeight) {
      setEnd(true);
    } else {
      setEnd(false);
    }
  }, [end, windowW, item, open, width, windowH]);
  return (
    <Container id="dropdown-container" end={end ? 1 : 0} onMouseLeave={() => setOpen(false)}>
      <Selection size={size} onClick={() => setOpen(!open)} {...args} id="selection-container">
        <Selection.Text {...args}>{item}</Selection.Text>
        <Selection.Icon>
          {
            open
              ? <ArrowUp />
              : <ArrowDown />
          }
        </Selection.Icon>
      </Selection>
      <Menu id="menu-container" style={{ display: open ? 'flex' : 'none' }} disable width={width} end={end ? 1 : 0}>
        {
          options.map((itm) => ((
            Array.isArray(itm.value) ? (
              <div key={itm.id}>
                <Menu.Item readOnly disabled key={itm.id} value={itm.name} width={width} />
                {
                  itm.value.map((sub) => (
                    <Menu.SubItem id={sub.id} readOnly key={sub.id} onClick={(e) => onClik(e)} value={sub.value} name={sub.name} active={item === sub.value} width={width} />
                  ))
                }
              </div>
            )
              : <Menu.Item id={itm.id} key={itm.id} readOnly onClick={(e) => onClik(e)} value={itm.value} name={itm.name} active={item === itm.value} />
          )))
        }
      </Menu>
    </Container>
  );
};

export default Single;
