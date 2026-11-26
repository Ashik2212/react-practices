import './App.css'
import EmployeeCard from './EmployeeCard.jsx'
import Header from './Header.jsx'

function App() {
  return (
    <>
      <Header />
      <EmployeeCard name="Muhsina" designation="MERN" salary={35000}/>
      <EmployeeCard name="Kiran" designation="DevopS" salary={45000}/>
      <EmployeeCard name="Charles" designation="Ui/Ux" salary={40000}/>
    </>
  )
}

export default App
