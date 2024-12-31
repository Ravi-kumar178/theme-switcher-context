import './App.css'
import ThemeBtn from './Component/ThemeBtn'
import Card from './Component/Card'
import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './Context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkMode = () => {
    setThemeMode("dark");
  }

  const lightMode = () =>{
    setThemeMode("light");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  

  return (

    <ThemeContextProvider value={{themeMode, lightMode, darkMode}}>
           <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card/>
                </div>
            </div>
          </div>
    </ThemeContextProvider>

  )
}

export default App
