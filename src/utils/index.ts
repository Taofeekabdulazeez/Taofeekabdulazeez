export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const formatted = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return formatted;
}
