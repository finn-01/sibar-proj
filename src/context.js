import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidenarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidenarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidenarOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
		//console.log("he");
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isModalOpen,
				openSidebar,
				openModal,
				closeSidebar,
				closeModal,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
