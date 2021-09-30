(async () => {
  const response = await fetch(`/api/authors`);
  const { status, data } = await response.json();

  if (status === "success") {
    const { author } = data;

    if (window.location.pathname === "/about") {
      document.querySelector("#author-name")!.innerHTML = author.name;
      document.querySelector("#author-email")!.innerHTML = author.email;

      const introduction: string = `Hi everyone! My GitHub username is ${
        author.name
      }, I was born in ${author.birthYear}, so I am ${
        new Date().getFullYear() - author.birthYear
      } now. At the time of doing this project, I'm a junior student at ${
        author.university
      } university.`;

      document.querySelector("#author-introduction")!.innerHTML = introduction;
    }
  }
})();
