import { Route, Routes as RoutesDom } from "react-router-dom"
import MainContainer from "../container/main-container";
import { Category } from "../domain/entities/category.entity";

interface RoutesProps {
  categories: Category[];
}

function Routes({ categories }: RoutesProps) {
  return (<RoutesDom>
    <Route path="/" element={<MainContainer />} />
    {categories.map((category) => (
      <Route
        key={category.id}
        path={`/${category.title}`}
        element={<MainContainer categoryId={category.id} />}
      />
    ))}
  </RoutesDom>
  )
}

export default Routes;

