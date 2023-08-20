export interface TabDto {
  title: string;
  icon: string;
  active: string[];
  disabled: string[];
  inactive: string[];
}

export interface PluginDto {
  title: string;
  description: string;
}

export interface PluginsDto {
  [key: string]: PluginDto;
}

export interface TabDataDto {
  [key: string]: TabDto;
}

export interface PayloadDto {
  tabs: TabDto[];
  plugins: PluginsDto;
  tabData: TabDataDto;
}

