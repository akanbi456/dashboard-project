

// import { useState } from 'react'
// import './App.css'
// import Header from './component/Header/Header'
// import Sidebar from './component/Sidebar/Sidebar'
// import Main from './ui/Main'
// import Content from './ui/content'
// import Profile from './component/Profile/Profile'
// import Stats from './component/Stats/Stats'
// import Team from './component/Team/Team'
// import Event from './component/Event/Event'

// function App() {
//   const [darkMode, setDarkMode] = useState(false)
// const [isSidebarOpen, SetIsSidebarOpen]=useState(false)
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode)
//   }
// const toggleSidebar = () =>{
//   SetIsSidebarOpen(!isSidebarOpen);
// }
//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar}/>

//       <Sidebar isSidebarOpen={isSidebarOpen}/>
//       <Main>
//         < Content >
//         <Stats darkMode={darkMode}/>
//         <div className='flex flex-col gap-3 lg:flex-row'>
//           <Team/>
//           <Event />
//         </div>
//          </Content>
//         <Profile darkMode={darkMode}/>
//       </Main>

//     </div>
//   )
// }

// export default App

import { useState } from 'react'


// Components
import Header from './component/Header/Header'
import Sidebar from './component/Sidebar/Sidebar'
import Main from './ui/Exact'
import Content from './ui/content'
import Profile from './component/Profile/Profile'
import Stats from './component/Stats/Stats'
import Team from './component/Team/Team'
import Event from './component/Event/Event'
import Exact from './ui/Exact'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Top Navigation Header */}
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />

      {/* Side Navigation */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Dashboard Layout */}
      <Exact>
        {/* Central Scrollable Content Area */}
        <Content>
          {/* Cards and Stats Section */}
          <Stats darkMode={darkMode} />

          {/* Bottom Two Column Section: Team & Event */}
          <div className='flex flex-col w-full gap-4 lg:flex-row'>
            <Team />
            <Event />
          </div>
        </Content>

        {/* Right-side Profile Section */}
        <Profile darkMode={darkMode} />
      </Exact>
    </div>
  )
}

export default App
