import './ToolBar.css';

function Toolbar() {
  return (
    <div
      className="tool-bar"
      onClick={() => {
        alert('You clicked on the toolbar!');
      }}
    >
      <span
        onClick={() => alert('Playing!')}
        className="btn"
      >
        Play Movie
      </span>
      <span
        onClick={() => alert('Uploading!')}
        className="btn"
      >
        Upload Image
      </span>
    </div>
  );
}

export default Toolbar;