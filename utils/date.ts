export const isOverDate = (date: string) => {
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
  return today < new Date(date);
}

export const getBeforeDay = (date: string) => {
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
  const diffTime = new Date(date).getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
