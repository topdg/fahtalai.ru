const OZON_URL = "https://www.ozon.ru/product/fa-talay-dzhon-tabletki-fah-talai-jone-baihor-brand-tailand-743149088/?from=share_ios&sh=xWVTrWeGrQ&utm_campaign=productpage_link&utm_medium=share_button&utm_source=smm&from=share_ios";
const METRIKA_ID = 91414803;

const cls = (...classNames: (string | boolean | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");

const yaMetrikaGoal = (goalName : string) => {
  if (window?.ym){
    window?.ym(METRIKA_ID, 'reachGoal', goalName);
  }
};

const yaMetrikaHit = (url : string) => {
  if (window?.ym){
    window?.ym(METRIKA_ID, 'hit', url);
  }
};

export { OZON_URL, cls, yaMetrikaGoal, yaMetrikaHit }