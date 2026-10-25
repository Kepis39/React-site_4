import classes from "../Pag1_section3/page1_section3.module.scss"
import {Photo} from '../../../Photo.js'
export default function Pag1_section3() {
  return (
    <>
    <section className={classes.sect3}>
     <div className={classes.container}>
      <h2>THE QUEST FOR BETTER.</h2>
      <img src={Photo.Rectanglegsg}/>
      <p>At LYMA, we’re always searching for the perfect balance of science,<br/>
         nature and technology. Every LYMA product has been designed to<br/>
          work together. We know that when we discover the best, you’ll <br/>
          discover yours.</p>
     </div>
     </section>
    </>
  )
}