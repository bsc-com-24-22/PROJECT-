import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LocationAndContact from './pages/ContactAndLocation/ContactAndLocation';




function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <BrowserRouter>
        <Routes>
          <Route path ='/' element= {<LocationAndContact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
