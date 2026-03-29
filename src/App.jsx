import React from 'react'
import Dashboard from './assets/components/Dashboard'

function App() {

  const userData = {
    name: "Gunasekaran",
    role: "lead", // developer, lead, manager
    loginstatus: true

  }

  
  // developer: "submit code",
  // lead: "create task, approve",
  // manager: "create task, delete task, approve"

  
  return (
    <div>

<Dashboard data = {userData}/>

    </div>
  )
}

export default App