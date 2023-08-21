import { Plugin } from "../domain/entities/plugin.entity";
import { Category } from "../domain/entities/category.entity";
import { EnableAllPluginsUseCase } from "./enable-all-plugins.usecase";

describe('DisableAllPluginsUseCase', () => {
  let enableAllPluginsUseCase: EnableAllPluginsUseCase;
  let categories: Category[];

  beforeEach(() => {
    const category1 = new Category('1', 'Category', 'icon');
    category1.addPlugin(new Plugin('1', 'Plugin 1', 'icon'));
    category1.addPlugin(new Plugin('2', 'Plugin 2', 'icon'));
    category1.disableAllPlugins();
    
    const category2 = new Category('2', 'Category', 'icon');
    category2.addPlugin(new Plugin('3', 'Plugin 3', 'icon'));
    category2.addPlugin(new Plugin('4', 'Plugin 4', 'icon'));
    category2.disableAllPlugins();

    const category3 = new Category('3', 'Category', 'icon');
    category3.addPlugin(new Plugin('5', 'Plugin 5', 'icon'));
    category3.addPlugin(new Plugin('6', 'Plugin 6', 'icon'));
    category3.disableAllPlugins();

    categories = [category1, category2, category3];

    enableAllPluginsUseCase = new EnableAllPluginsUseCase(categories);
  });

  it('should return all categories', async () => {
    const result = await enableAllPluginsUseCase.execute();
    
    expect(result).toEqual(categories);
  });

  it('should enabled all plugins in all categories', async () => {
    const result = await enableAllPluginsUseCase.execute();

    result.forEach((category) => {
      expect(category.plugins.every((plugin) => plugin.enabled)).toBeTruthy();
    });
  });
});


