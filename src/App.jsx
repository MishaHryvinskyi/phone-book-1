import Form from './Components/Form/Form'

import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'
import { Container } from './Container/Container'
import Filter from './Components/Filter/Filter';
import List from './Components/List/List';

function App() {
const [filter, setFilter] = useState('');
const [books, setBooks] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]);

const handleFilterChange = e => setFilter(e.target.value)
const normalizedFilter = filter.toLowerCase();
const visibleBooks = books.filter(({name}) => name.toLowerCase().includes(normalizedFilter));

const deleteContact = id => setBooks(prev => prev.filter(
  contact => contact.id !== id
));

const handleSubmit = text => {
  const id = crypto.randomUUID();
  const isExist = books.some(book => book.name.toLowerCase() === text.name.toLowerCase());
  
  if(isExist) {
    toast.warning(`${text.name} Вже є у списку контактів!`);
    return;
  }

  const newContacts = {
    id: id,
    name: text.name,
    number: text.number,
  }

  setBooks(prev => [...prev, newContacts])
  toast.success(`Контакт ${text.name} додано`);
}

  return (
    <Container>
      <h1>PhoneBook</h1>
      <Form handleSubmit={handleSubmit}/>
      <Filter 
        handleFilterChange={handleFilterChange} 
        filter={filter}
      />
      <List visibleBooks={visibleBooks} deleteContact={deleteContact}/>
      <p>Кількість контактів: {books.length}</p>
      <ToastContainer />
    </Container>
  )
}

export default App
