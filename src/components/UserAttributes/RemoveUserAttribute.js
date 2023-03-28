import '../Components.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  var titleCard = 'Remove User Attribute';
  var mParticle = window.mParticle;

  ///// Remove user attributes /////
  var removeUserAttribute = function(){
    var currentUser = mParticle.Identity.getCurrentUser();
    var inputs = document.querySelectorAll("input.InputRemoveAttribute");
    var key;
    for (var e of inputs) {
      if (e.name === "AttributeKey") {
        key = e.value;
      }
    }
    currentUser.removeUserAttribute(key);
    clear();
  }

  ///// Clear all inputs /////
  var clear = function(){
    Array.from(document.querySelectorAll("input.InputRemoveAttribute")).forEach(
      input => (input.value = "")
    );
  }

  return (
    <Card className='Card' id='CardUserAttributes'>
      <Card.Body>
        <Card.Title>{titleCard}</Card.Title>
        <Card.Text>
          Remove the user attribute from user. 
        </Card.Text>
        <div className='mb-4'>
          <form>
            <label>Attribute:&nbsp;</label>
            <input className='InputRemoveAttribute' type="text" name="AttributeKey" />
          </form>
        </div>
        <br></br>
        <br></br>
        <div className='d-flex justify-content-end mt-2'>
          <Button className='ButtonCard' variant="primary" onClick={removeUserAttribute}>Submit</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default App;