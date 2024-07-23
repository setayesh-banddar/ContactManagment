import ContactManagement from './components/ContactManagement'
import { ContactManager } from './contactContext'
import './index.css'

function App() {
  const {contacts} =ContactManager()

  return (
 <ContactManagement contacts={contacts}/>
  )
}

export default App
