import React from 'react';
import './Sidebar.css';

export default function SidebarItem({ name, active, handleClick }) {
  return (
    <button
      className={`sidebar-item ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
