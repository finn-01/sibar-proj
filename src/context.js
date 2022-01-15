import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidenarOpen] = useState(false);
	const [isModelOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidenarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidenarOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={
				(isSidebarOpen,
				isModelOpen,
				openSidebar,
				openModal,
				closeSidebar,
				closeModal)
			}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
