export const cls = (...classNames: (string | boolean | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");

export const yaMetrikaGoal = (goalName : string) => {
  console.log('ya metrika reach goal ', goalName);
  // eval(`ym(91414803, 'reachGoal', ${goalName})`)
};