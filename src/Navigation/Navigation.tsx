import './Navigation.scss';
import Logo from './../assets/logo.svg';
import { useRef, useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside.ts';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  useClickOutside(ref, () => setOpen(false), { exclude: [burgerRef] });
  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  const items = [
    { href: '#about-us', label: 'Про нас' },
    { href: '#products', label: 'Продукція' },
    // { href: '#features', label: 'Послуги' },
    { href: '#technologies', label: 'Технологія' },
    { href: '#contacts', label: 'Контакти' },
  ];

  return (
    <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
      <div className="nav__inner">
        <a className="nav__brand" href="#home" onClick={close}>
          <img src={Logo} alt="Mezha Svicha logo" style={{ height: 24 }} />
        </a>

        <button
          ref={burgerRef}
          className="nav__burger"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-menu"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onClick={toggle}
        >
          <span className="nav__burger-line" aria-hidden="true" />
          <span className="nav__burger-line" aria-hidden="true" />
          <span className="nav__burger-line" aria-hidden="true" />
        </button>

        <ul
          id="primary-menu"
          className="nav__menu"
          role="menubar"
          ref={ref as React.RefObject<HTMLUListElement>}
        >
          {items.map((item) => (
            <li key={item.href} role="none">
              <a role="menuitem" href={item.href} className="nav__link" onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
