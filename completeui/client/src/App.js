import productdesign from './Assets/Product Design.png'
import mtvd from './Assets/mtvd.png' 
import ued from './Assets/ued.svg' 
import vd from './Assets/vd.svg' 
import './App.css';

function App() {
  return (
    <div className="App">
      
      <br /><br /><br /><br /><br />
      <br /><br /><br />
      <br />
        <section>
          <div className="container">
            <div className="hf">
              <div className="left">
                <h1>Product Design</h1>
                <br /><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt beatae eveniet blanditiis mollitia? Quod quos voluptas illum, dolor similique est voluptate vero magnam dicta totam, nihil ab quo quis.</p>
              </div>
              <div className="right">
                <img src={productdesign} alt="" className="firstlogo"/>
              </div>
            </div>
          </div>
        </section>

        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /> 
        <section>
          <div className="container">
            <div className="hf">
             
              <div className="right">
                <img src={mtvd} alt="" width={400}/>
              </div>
              <div className="left">
                <h1>More than visual design</h1>
                <br /><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt beatae eveniet blanditiis mollitia? Quod quos voluptas illum, dolor similique est voluptate vero magnam dicta totam, nihil ab quo quis.</p>
              </div>
            </div>
          </div>
        </section>
        <br /><br /><br /><br /><br /><br /><br />
        <section className="bluebg">
          <div className="container">
            <br /><br /><br />
          <h1 className='colorwhite'>Product services</h1>
            <div className="hf">
              <button className="button">
                Virtual Design 1
              </button>
              <button className="button">
                Virtual Design 2
              </button>
              <button className="button">
                Virtual Design 3
              </button>
              <button className="button">
                Virtual Design 4
              </button>
              <button className="button">
                Virtual Design 5
              </button>
              <button className="button">
                Virtual Design 6
              </button>
              <button className="button">
                Virtual Design 7
              </button>
            </div>

          </div>
          <br /><br /><br />
          
        </section>
        <section>
          <div className="container">
            <div className="hf">
             
              <div className="left">
                <h1>User experience design</h1>
                <br /><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt beatae eveniet blanditiis mollitia? Quod quos voluptas illum, dolor similique est voluptate vero magnam dicta totam, nihil ab quo quis.</p>
              </div>
              <div className="right">
                <img src={ued} alt="" width={400}/>
                
              </div>
            </div>
          </div>
        </section>
        <br /><br /><br /><br /><br /><br /><br />
        
        <section>
          <div className="container">
            <div className="hf">
             
              <div className="right">
                <img src={vd} alt="" width={400}/>
              </div>
              <div className="left">
                <h1>Visual Design</h1>
                <br /><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt beatae eveniet blanditiis mollitia? Quod quos voluptas illum, dolor similique est voluptate vero magnam dicta totam, nihil ab quo quis.</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;