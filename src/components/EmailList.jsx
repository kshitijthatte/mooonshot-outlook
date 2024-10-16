import React from 'react'
import EmailItem from './EmailItem'

export default function EmailList({ emails, onEmailClick, selectedEmail }) {
  return (
    <div className="email-list">
      {emails.map(email => (
        <EmailItem 
          key={email.id} 
          email={email} 
          onClick={() => onEmailClick(email)}
          isSelected={selectedEmail?.id === email.id}
        />
      ))}
    </div>
  )
}