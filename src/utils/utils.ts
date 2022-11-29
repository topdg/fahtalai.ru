export const cls = (...classNames: (string | boolean | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");

export const yaMetrikaGoal = (goalName : string) => {
  eval(`ym(91414803, 'reachGoal', ${goalName})`)
};