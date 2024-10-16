import { useState, useEffect } from "react";
import EmailList from "./components/EmailList";
import EmailBody from "./components/EmailBody";
import FilterBar from "./components/FilterBar";
import "./App.css";

export default function App() {
  const [emails, setEmails] = useState([])
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [emailBody, setEmailBody] = useState('')
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchEmails()
  }, [])

  const fetchEmails = async () => {
    try {
      const response = await fetch(`https://flipkart-email-mock.now.sh/`)
      const data = await response.json()
      setEmails(prevEmails => [
        ...prevEmails,
        ...data.list.map(email => ({ ...email, read: false, favorite: false }))
      ])
    } catch (error) {
      console.error('Error fetching emails:', error)
    }
  }

  const fetchEmailBody = async (id) => {
    try {
      const response = await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
      const data = await response.json()
      setEmailBody(data.body)
    } catch (error) {
      console.error('Error fetching email body:', error)
    }
  }

  const handleEmailClick = (email) => {
    if (selectedEmail && selectedEmail.id === email.id) {
      setSelectedEmail(null)
      setEmailBody('')
    } else {
      setSelectedEmail(email)
      fetchEmailBody(email.id)
      markAsRead(email.id)
    }
  }

  const markAsRead = (id) => {
    setEmails(prevEmails => prevEmails.map(email => 
      email.id === id ? { ...email, read: true } : email
    ));
  }

  const toggleFavorite = (id) => {
    setEmails(prevEmails => prevEmails.map(email => 
      email.id === id ? { ...email, favorite: !email.favorite } : email
    ));
  }

  const filteredEmails = emails.filter(email => {
    if (filter === 'read') return email.read
    if (filter === 'unread') return !email.read
    if (filter === 'favorites') return email.favorite
    return true
  })

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <div className="app">
      <FilterBar filter={filter} setFilter={setFilter} />
      <div className="content">
        <EmailList 
          emails={filteredEmails} 
          onEmailClick={handleEmailClick} 
          selectedEmail={selectedEmail}
        />
        {selectedEmail && (
          <EmailBody 
            email={selectedEmail} 
            body={emailBody} 
            onFavoriteToggle={() => toggleFavorite(selectedEmail.id)}
          />
        )}
      </div>
      {page < 2 && (
        <button className="load-more" onClick={loadMore}>Load More</button>
      )}
    </div>
  )
}