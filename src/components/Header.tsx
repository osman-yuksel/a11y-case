export default function Header({
  isHidden,
  setIsHidden,
}: {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header tabIndex={-1} aria-hidden="false">
      <nav aria-label="Main Navigation">
        <ul aria-label="Navigation Items">
          <li role="menuitem">
            <a href="#deals" accessKey="1">
              Today's Deals
            </a>
          </li>
          <li role="menuitem">
            <a href="#buy-again" accessKey="2">
              Buy Again
            </a>
          </li>
          <li className={`dropdown ${isHidden ? "hidden-dropdown" : ""}`} role="menuitem">
            <button
              type="button"
              className="dropdown-title"
              aria-expanded="false"
              aria-controls="electronic-dropdown"
              onClick={() => setIsHidden(false)}
              accessKey="3"
            >
              Electronic
            </button>
            <ul
              className={`dropdown-menu ${isHidden ? "hidden-dropdown-menu" : ""}`}
              id="electronic-dropdown"
              aria-hidden="false"
              role="menu"
            >
              <li>
                <a href="#computers">Computers</a>
              </li>
              <li>
                <a href="#phones">Phones</a>
              </li>
              <li>
                <a href="#cameras">Cameras</a>
              </li>
              <li>
                <a href="#tvs">TVs</a>
              </li>
            </ul>
          </li>
          <li className={`dropdown ${isHidden ? "hidden-dropdown" : ""}`} role="menuitem">
            <button
              type="button"
              className="dropdown-title"
              aria-expanded="false"
              aria-controls="fashion-dropdown"
              onClick={() => setIsHidden(false)}
              accessKey="4"
            >
              Fashion
            </button>
            <ul
              className={`dropdown-menu ${isHidden ? "hidden-dropdown-menu" : ""}`}
              id="fashion-dropdown"
            >
              <li>
                <a href="#kids">Kids</a>
              </li>
              <li>
                <a href="#woman">Woman</a>
              </li>
              <li>
                <a href="#men">Men</a>
              </li>
            </ul>
          </li>
          <li role="menuitem">
            <a href="#gifts" accessKey="5">
              Gifts
            </a>
          </li>
          <li role="menuitem">
            <a href="#order" accessKey="6">
              Order
            </a>
          </li>
        </ul>
      </nav>
      <strong>Dropdowns are {isHidden ? "disabled" : "enabled"}</strong>
    </header>
  );
}
