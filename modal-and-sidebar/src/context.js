import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
        const [isSidebarOpen, setiIsSidebarOpen] = useState(false);
        const [isModalOpen, setiIsModalOpen] = useState(false);

        const openSidebar = () => {
                setiIsSidebarOpen(true);
        }
        const closeSidebar = () => {
                setiIsSidebarOpen(false);
        }

        const openModal= () => {
                setiIsModalOpen(true);
        }
        const closeModal= () => {
                setiIsModalOpen(false);
        }

        return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, closeModal, openSidebar, closeSidebar}} >{children}</AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
        return useContext(AppContext);
}

export { AppContext, AppProvider }
