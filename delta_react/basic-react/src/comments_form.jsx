import { useState } from "react";

export default function CommentsForm() {
  return (
    <form>
      <input type="text" id="comment" name="comment" placeholder="user name" />
      <br></br>
      <br></br>

      <textarea>add few remar</textarea>
      <br></br>
      <br></br>

      <input id="rating" type="number" placeholder="rating"></input>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
