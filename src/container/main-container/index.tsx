import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSlice } from "../../redux/categories-slice";
import { RootState } from "../../redux/store";

interface MainContainerProps {
  categoryId?: string;
}

function MainContainer({ categoryId }: MainContainerProps) {
  const { currentCategory } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("categoryId", categoryId);
    if (categoryId) dispatch(categoriesSlice.actions.setCurrentCategory(categoryId));
  }, [categoryId]);

  return (
    <div>
      {currentCategory && <h1>{currentCategory.title}</h1>}

    </div>
  );
}

export default MainContainer;
