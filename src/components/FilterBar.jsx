import React from 'react'

export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button 
        className={filter === 'all' ? 'active' : ''} 
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button 
        className={filter === 'read' ? 'active' : ''} 
        onClick={() => setFilter('read')}
      >
        Read
      </button>
      <button 
        className={filter === 'unread' ? 'active' : ''} 
        onClick={() => setFilter('unread')}
      >
        Unread
      </button>
      <button 
        className={filter === 'favorites' ? 'active' : ''} 
        onClick={() => setFilter('favorites')}
      >
        Favorites
      </button>
    </div>
  )
}