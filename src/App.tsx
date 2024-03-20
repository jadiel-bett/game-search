import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClicked={() => console.log("clicked")} color="red"></Like>
    </div>
  );
}

export default App;

// let cities = ["New York", "London", "Paris", "Nairobi", "Tokyo"];

// const handleSelectItem = (item: string) => {
//   console.log(item);
// };
// // const [alertVisible, setVisibility] = useState(false);

// <div>
//   <ListGroup
//     items={cities}
//     heading="Cities"
//     onSelectItem={handleSelectItem}
//   ></ListGroup>
// </div>

// <div>
//   {alertVisible && (
//     <Alert onClose={() => setVisibility(!alertVisible)}>My Alert</Alert>
//   )}
//   <Button color="primary" onClick={() => setVisibility(!alertVisible)}>
//     My Button
//   </Button>
// </div>

{
  /* <Button color="primary" onClick={() => {}}>
        My Button
      </Button> */
}
