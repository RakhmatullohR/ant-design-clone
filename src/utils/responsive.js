export const MAX_MOBILE_WIDTH = 599;
export const MIN_TABLET_WIDTH = 600;
export const MAX_TABLET_WIDTH = 959;
export const MIN_DESKTOP_WIDTH = 960;

export const device = {
  mobile: `(max-width: ${MAX_MOBILE_WIDTH}px)`,
  tablet: `(min-width: ${MIN_TABLET_WIDTH}px and max-width: ${MAX_TABLET_WIDTH}px)`,
  desktop: `(mix-width: ${MIN_DESKTOP_WIDTH}px)`
}