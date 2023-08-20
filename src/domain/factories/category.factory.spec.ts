import { PluginsDto, TabDataDto } from "../dtos/api-payload.dto";
import { CategoryFactory } from "./category.factory";

describe('CategoryFactory', () => {
  let categoryStoreDto: TabDataDto;
  let pluginsStoreDto: PluginsDto;

  beforeEach(() => {
    categoryStoreDto = {
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
    pluginsStoreDto = {
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

  describe('create', () => {
    it('should return null when categoryDto is not found', () => {
      const categoryId = 'category-3';
      const category = CategoryFactory.create(categoryId, categoryStoreDto, pluginsStoreDto);

      expect(category).toBeNull();
    });

    it('should return null when categoryStoreDto is not found', () => {
      const categoryId = 'category-1';
      const category = CategoryFactory.create(categoryId, null, pluginsStoreDto);

      expect(category).toBeNull();
    });

    it('should return category when categoryDto and categoryStoreDto are found', () => {
      const categoryId = 'category-1';
      const category = CategoryFactory.create(categoryId, categoryStoreDto, pluginsStoreDto);
      const length = categoryStoreDto[categoryId].active.length + categoryStoreDto[categoryId].inactive.length + categoryStoreDto[categoryId].disabled.length;
      expect(category).not.toBeNull();
      expect(category?.plugins).toHaveLength(length);
      expect(category?.id).toEqual(categoryId);
      expect(category?.title).toEqual(categoryStoreDto[categoryId].title);
      expect(category?.icon).toEqual(categoryStoreDto[categoryId].icon);
    });

    it('should return category with plugins correct length', () => {
      const categoryId = 'category-1';
      const category = CategoryFactory.create(categoryId, categoryStoreDto, pluginsStoreDto);
      const length = categoryStoreDto[categoryId].active.length + categoryStoreDto[categoryId].inactive.length + categoryStoreDto[categoryId].disabled.length;
      expect(category?.plugins).toHaveLength(length);
    });

    it('should return category with plugins correct number of active (active + disabled))', () => {
      const categoryId = 'category-1';
      const category = CategoryFactory.create(categoryId, categoryStoreDto, pluginsStoreDto);
      const length = categoryStoreDto[categoryId].active.length + categoryStoreDto[categoryId].disabled.length;
      const activePlugins = category?.plugins.filter(plugin => plugin.active);
      expect(activePlugins).toHaveLength(length);
    });

    it('should return category with plugins correct number of inactive', () => {
      const categoryId = 'category-1';
      const category = CategoryFactory.create(categoryId, categoryStoreDto, pluginsStoreDto);
      const length = categoryStoreDto[categoryId].inactive.length;
      const inactivePlugins = category?.plugins.filter(plugin => !plugin.active);
      expect(inactivePlugins).toHaveLength(length);
    });

    it('should return category with plugins correct number of disabled', () => {
      const categoryId = 'category-1';
      const category = CategoryFactory.create(categoryId, categoryStoreDto, pluginsStoreDto);
      const length = categoryStoreDto[categoryId].disabled.length;
      const disabledPlugins = category?.plugins.filter(plugin => plugin.enabled === false);
      expect(disabledPlugins).toHaveLength(length);
    });

    it('should return category with plugins correct order', () => {
      const categoryId = 'category-1';
      const category = CategoryFactory.create(categoryId, categoryStoreDto, pluginsStoreDto);
      const pluginsIds = category?.plugins.map(plugin => plugin.id);
      const pluginsIdsExpected = [...categoryStoreDto[categoryId].active, ...categoryStoreDto[categoryId].inactive, ...categoryStoreDto[categoryId].disabled];

      expect(pluginsIds).toEqual(pluginsIdsExpected);
    });

  });
});
