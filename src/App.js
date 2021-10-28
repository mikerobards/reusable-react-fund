const Button = ({ onClick, children, ...props }) => {
  return <button {...props} onClick={onClick}>{children}</button>
}


function App() {
  return (
    <div >
      <Button onClick={() => {
        console.log("I was clicked")
      }}>

        + Add
      </Button>
      <Button onClick={() => {
        console.log("I was tapped!")
      }}>
        Subtract -
      </Button>
      <Button children="MULTIPLY *****" />
    </div>
  );
}

export default App;
