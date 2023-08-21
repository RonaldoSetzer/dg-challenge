import { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import SideMenu from "./components/side-menu";
import { categoriesSlice } from "./redux/categories-slice";
import Routes from "./routes";

const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

function App() {
  const dispatch = useDispatch();
  const { categories, currentCategory, pluginsEnabled } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(categoriesSlice.actions.fetchCategories());
  }, [dispatch])

  function handleEnableAllPlugins() {
    dispatch(categoriesSlice.actions.toggleEnableAllPlugins());
  }

  return (
    <BrowserRouter>
      <Container>
        <SideMenu
          categories={categories}
          currentCategory={currentCategory}
          pluginsEnable={pluginsEnabled}
          onToggleEnable={handleEnableAllPlugins}
        />
        <Routes categories={categories} />
      </Container>
    </BrowserRouter>
  )
}

export default App

