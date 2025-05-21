export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long", // Use "short" for "Apr"
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
