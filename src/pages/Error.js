import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h2>Oops! The page you are looking for doesn't exist.</h2>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error
