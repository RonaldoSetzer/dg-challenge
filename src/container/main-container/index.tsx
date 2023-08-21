import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSlice } from "../../redux/categories-slice";
import { RootState } from "../../redux/store";
import PluginCard from "../../components/plugin-card";

import { Grid } from "./styles";

interface MainContainerProps {
  categoryId?: string;
}

function MainContainer({ categoryId }: MainContainerProps) {
  const { currentCategory } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryId) dispatch(categoriesSlice.actions.setCurrentCategory(categoryId));
  }, [categoryId]);

  return (
    <div>
      {currentCategory && <h2>{currentCategory.title} Plugins</h2>}
      <Grid>
        {currentCategory && currentCategory.plugins.map((plugin) => (
          <PluginCard
            key={plugin.id}
            description={plugin.description}
            title={plugin.title}
            active={plugin.active}
            enable={plugin.enabled}
          />

        ))}

      </Grid>
    </div>
  );
}

export default MainContainer;
