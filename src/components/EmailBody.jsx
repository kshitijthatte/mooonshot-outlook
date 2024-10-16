import React from 'react'

export default function EmailBody({ email, body, onFavoriteToggle }) {
  const formattedDate = new Date(email.date).toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })

  return (
    <div className="email-body">
      <div className="email-header">
        <h2>{email.subject}</h2>
        <button onClick={onFavoriteToggle}>
          {email.favorite ? 'Unmark as Favorite' : 'Mark as Favorite'}
        </button>
      </div>
      <div className="email-meta">
        <span>From: {email.from.name} &lt;{email.from.email}&gt;</span>
        <span>Date: {formattedDate}</span>
      </div>
      <div className="email-content" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  )
}