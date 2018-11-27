const loadList = (id) => JSON.parse(
  file.read(`./storage/${id}.json`)
);

const getStudent = (id) =>
  fetch(url, {
    method: "GET",
    body: JSON.stringify({studentId: id}),
  })
  .then(response => response.json()); 
