import Form from './Components/Form/Form'

import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import { Container, QuantityText } from './Container/Container'
import Filter from './Components/Filter/Filter';
import List from './Components/List/List';
import Modal from './Components/Modal/Modal'

function App() {
const [filter, setFilter] = useState('');
const [books, setBooks] = useState(() => {
  const saved = localStorage.getItem('books');
  return saved ? JSON.parse(saved) : [];
});
const [isOpen, setIsOpen] = useState(false);


useEffect(() => {
  localStorage.setItem('books', JSON.stringify(books))
}, [books]);

const toggleModal = () => setIsOpen(!isOpen);
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
      <button type='button' onClick={toggleModal}>Відкрити форму</button>
     {isOpen && <Modal toggleOpen={toggleModal}>
        <Form handleSubmit={handleSubmit}/>
      </Modal>}
      <Filter 
        handleFilterChange={handleFilterChange} 
        filter={filter}
      />
      <QuantityText>Кількість контактів: {books.length}</QuantityText>
      <List visibleBooks={visibleBooks} deleteContact={deleteContact}/>
      <ToastContainer />
    </Container>
  )
}

export default App
