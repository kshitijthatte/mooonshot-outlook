import React from 'react'

export default function EmailItem({ email, onClick, isSelected }) {
  const formattedDate = new Date(email.date).toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })

  return (
    <div 
      className={`email-item ${email.read ? 'read' : 'unread'} ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      <div className="avatar">{email.from.name[0].toUpperCase()}</div>
      <div className="email-content">
        <div className="from">From: <strong>{email.from.name} &lt;{email.from.email}&gt;</strong></div>
        <div className="subject">Subject: <strong>{email.subject}</strong></div>
        <div className="description">{email.short_description}</div>
        <div className="date">{formattedDate}</div>
      </div>
      {email.favorite && <div className="favorite">★</div>}
    </div>
  )
}