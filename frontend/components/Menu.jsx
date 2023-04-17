import { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <button className="menu-button" onClick={handleMenuClick}>
        Menu
      </button>
      {isOpen && (
        <ul className="menu-items">
          <li className="menu-item">
            <Link href="/pandemonium">
              <a>Pandemonium</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/parrotcoin">
              <a>Parrotcoin</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/lottery">
              <a>Lottery</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/whitepaper">
              <a>Whitepaper</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/mint">
              <a>Mint</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/balance">
              <a>Balance</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Menu;
