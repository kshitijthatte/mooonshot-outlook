import React from 'react'

export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <span>Filter By: </span>
      <button 
        className={filter === 'read' ? 'active' : ''} 
        onClick={() => setFilter(filter === 'read' ? 'all' : 'read')}
      >
        Read
      </button>
      <button 
        className={filter === 'unread' ? 'active' : ''} 
        onClick={() => setFilter(filter === 'unread' ? 'all' : 'unread')}
      >
        Unread
      </button>
      <button 
        className={filter === 'favorites' ? 'active' : ''} 
        onClick={() => setFilter(filter === 'favorites' ? 'all' : 'favorites')}
      >
        Favorites
      </button>
    </div>
  )
}