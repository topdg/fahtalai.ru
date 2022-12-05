export const cls = (...classNames: (string | boolean | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");

export const yaMetrikaGoal = (goalName : string) => {
  if (window?.ym){
    window?.ym(91414803, 'reachGoal', goalName);
  }
};

export const yaMetrikaHit = (url : string) => {
  if (window?.ym){
    window?.ym(91414803, 'hit', url);
  }
};