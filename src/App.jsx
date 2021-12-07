import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './components/home/Home'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <Switch>
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
