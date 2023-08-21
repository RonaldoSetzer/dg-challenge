import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";
import MainContainer from "./container/main-container";
import SideMenu from "./components/side-menu";
import { categoriesSlice } from "./redux/categories-slice";

const Container = styled.div`
  display: flex;
`

function App() {
  const { categories, currentCategory } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
      const data = await response.json()
      dispatch(categoriesSlice.actions.seedCategories(data.data))
    }
    fetchdata()
  }, [])

  return (
    <BrowserRouter>
      <Container>
        <SideMenu categories={categories} currentCategory={currentCategory} />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          {categories.map((category) => (
            <Route
              key={category.id}
              path={`/${category.title}`}
              element={<MainContainer categoryId={category.id} />}
            />
          ))}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App

