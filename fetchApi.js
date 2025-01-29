fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `could not fetch data due to ${response.statusText} error`
      );
    }

    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
