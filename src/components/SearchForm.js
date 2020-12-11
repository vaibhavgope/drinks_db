import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleInput = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Search for your favourite drink</label>
          <input type="text" name='name' id='name' onChange={handleInput} ref={searchValue} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
