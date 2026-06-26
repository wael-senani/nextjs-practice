"use client";
import React from "react";

export const Submition = () => {
  console.log("this is server rendered");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("this is client rendered");
      }}
    >
      <button type="submit">submit</button>
    </form>
  );
};
/**anything that
 * doesnt require client interaction
 * and
 * isnt dependent on the browser
 * gets server renderd */
