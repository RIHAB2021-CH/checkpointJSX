

import "./styles.css";
import imageInSrc from "./imageInSrcFolder.jpg"

function App() {
  return (
    <>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 className="title red">Your name here</h1>

        <br/ >

        <img src={imageInSrc} alt="logo1" width="420" height="200" style={{marginLeft:"40vw"}} />

        <br/ >
        <img src="/imageInPublicFolder.jpg" alt="log2" width="420" height="200" style={{marginLeft:"40vw"}} />

    </div>

<video width="420" height="340" style={{marginLeft:"40vw"}} controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
</>
  );
}

export default App;
