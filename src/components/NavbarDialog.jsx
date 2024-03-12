import React, { useState } from "react";

const NavbarDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-dialog">
      <button onClick={toggleDialog}>Toggle Navbar Dialog</button>
      {isOpen && (
        <div className="dialog-content">
          {/* Content of the navbar dialog */}
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarDialog;