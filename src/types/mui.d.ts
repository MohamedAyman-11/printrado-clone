import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customColor: Palette["primary"];
    whiteColor: Palette["primary"];
  }
  interface PaletteOptions {
    customColor?: PaletteOptions["primary"];
    whiteColor?: PaletteOptions["primary"];
  }
    interface BreakpointOverrides {
    xxl: true; 
    custom:true
  }

}