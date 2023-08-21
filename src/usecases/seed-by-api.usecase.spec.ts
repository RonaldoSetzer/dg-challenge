import { PluginsDto, TabDataDto } from "../domain/dtos/api-payload.dto";
import { SeedByApiUseCase } from "./seed-by-api.usecase";

describe('SeedByApiUseCase', () => {
  let seedByApiUseCase: SeedByApiUseCase;
  let tabs: string[];
  let plugins: PluginsDto;
  let tabdata: TabDataDto;

  beforeEach(() => {
    tabdata = {
      'category-1': {
        title: 'Category 1',
        icon: 'icon-1',
        active: ['plugin-1', 'plugin-2'],
        disabled: ['plugin-3'],
        inactive: ['plugin-4'],
      },
      'category-2': {
        title: 'Category 2',
        icon: 'icon-2',
        active: ['plugin-5', 'plugin-6'],
        disabled: ['plugin-7'],
        inactive: ['plugin-8'],
      },
    };
    plugins = {
      'plugin-1': {
        title: 'Plugin 1',
        description: 'Plugin 1 description',
      },
      'plugin-2': {
        title: 'Plugin 2',
        description: 'Plugin 2 description',
      },
      'plugin-3': {
        title: 'Plugin 3',
        description: 'Plugin 3 description',
      },
      'plugin-4': {
        title: 'Plugin 4',
        description: 'Plugin 4 description',
      },
      'plugin-5': {
        title: 'Plugin 5',
        description: 'Plugin 5 description',
      },
      'plugin-6': {
        title: 'Plugin 6',
        description: 'Plugin 6 description',
      },
      'plugin-7': {
        title: 'Plugin 7',
        description: 'Plugin 7 description',
      },
      'plugin-8': {
        title: 'Plugin 8',
        description: 'Plugin 8 description',
      },
    };
  });

  describe('execute', () => {
    it('should return categories', async () => {
      tabs = ['category-1', 'category-2'];
      seedByApiUseCase = new SeedByApiUseCase(tabs, tabdata, plugins);
      const categories = await seedByApiUseCase.execute();

      expect(categories[0].title).toEqual('Category 1');
      expect(categories[0].icon).toEqual('icon-1');
      expect(categories[0].plugins[0].title).toEqual('Plugin 1');
      expect(categories[0].plugins[0].description).toEqual('Plugin 1 description');
      expect(categories[0].plugins[1].title).toEqual('Plugin 2');
      expect(categories[0].plugins[1].description).toEqual('Plugin 2 description');

      expect(categories[1].title).toEqual('Category 2');
      expect(categories[1].icon).toEqual('icon-2');
      expect(categories[1].plugins[0].title).toEqual('Plugin 5');
      expect(categories[1].plugins[0].description).toEqual('Plugin 5 description');
      expect(categories[1].plugins[1].title).toEqual('Plugin 6');
      expect(categories[1].plugins[1].description).toEqual('Plugin 6 description');
    });
  });
});

