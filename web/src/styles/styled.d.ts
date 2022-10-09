import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      buttonTheme: string;
      main_bg: string;
      secondary_bg: string;
      dark_bg: string;
      light_gray: string;
      lighter_gray: string;
      main_purple_clr: string;
      secondary_purple_clr: string;
      main_green_clr: string;
      secondary_green_clr: string;
      main_yellow_clr: string;
    };
  }
}
