//array of object => object with array
function GroupByTest() {
  let people = [
    { name: "Alice", specialization: "frontend", active: true },
    { name: "Bob", specialization: "backend", active: false },
    { name: "Cecile", specialization: "devops", active: true },
    { name: "Dan", specialization: "frontend", active: false },
    { name: "Elijah", specialization: "backend", active: true },
  ];

  let splzObj = Object.groupBy(people, ({ specialization }) => specialization);

  return (
    <div>
      <p>{`frontend:${splzObj.frontend.map((v) => `[${v.name}:${v.active}]`)}`}</p>
      <p>{`backend:${splzObj.backend.map((v) => `[${v.name}:${v.active}]`)}`}</p>
    </div>
  );
}

export default GroupByTest;
