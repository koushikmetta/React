import { useState } from "react";
import Header from "./components/Header.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  function handleStartAddProject() {
    setProjectsState(preState => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(preState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [...preState.projects, newProject]
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 bg-stone-800 text-stone-50">
        <Header />
      </header>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
        {content}
      </main>
    </>
  );
}

export default App;
