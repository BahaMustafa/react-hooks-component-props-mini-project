import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const minuteDisplay = minutes < 30
    ? "☕️".repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`
    : "🍱".repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minuteDisplay}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
