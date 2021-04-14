export const transition = (property: string, duration: string) => ({
  webkitTransition: `${property} ${duration} ease`,
  mozTransition: `${property} ${duration} ease`,
  transition: `${property} ${duration} ease`,
});
