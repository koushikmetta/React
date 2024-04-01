import { useState } from "react";
import Header from "./components/Header.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  function handleAddTask(text) {
    setProjectsState(preState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: preState.selectedProjectId,
        id: taskId
      };
      return {
        ...preState,
        tasks: [newTask, ...preState.tasks]
      };
    });
  }

  function handleDeleteTask(text) {

  }
  function handleStartAddProject() {
    setProjectsState(preState => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(preState => {
      return {
        ...preState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(preState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [...preState.projects, newProject]
      };
    });
  }
  function handleSelectProject(id) {
    setProjectsState(preState => {
      return {
        ...preState,
        selectedProjectId: id,
      };
    });
  }
  function handleDeleteProject() {
    setProjectsState(preState => {
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: preState.projects.filter((project) => project.id !== preState.selectedProjectId)
      };
    });
  }

  const selcetdProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selcetdProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 bg-stone-800 text-stone-50">
        <Header />
      </header>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} />
        {content}
      </main>
    </>
  );
}

export default App;
