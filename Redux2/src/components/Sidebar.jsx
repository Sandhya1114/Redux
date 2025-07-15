import React, { useState } from 'react';
import "./sidebar.css"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);


  const menuItems = [
    'Dashboard',
'Page Layouts',
'Apps',
'Widgets',
'Sidebar Layouts',
'Basic UI Elements',
'Advanced UI',
'Popups',
'Notifications',
'Icons',
'Forms',
'Text editors',
'Code editors',
'Charts',
'Tables',
'Maps',
'User Pages',
'Error pages',
'General Pages',
'E-commerce',
'E-mail',
'Calendar',
'Gallery',
'Documentation',
'Projects',
'Categories',

'Free',
'Pro',
  ];

  return (
    <div className="sidebar-container">
      <div>
                    <h1 className="header-heading">My Dashboard</h1>
                </div>

      <ul className="sidebar-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="sidebar-list-item"
            
          >
            {isCollapsed ? item[0] : item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;