import classes from "../Pag1_section2/page1_section2.module.scss"
export default function Pag1_section2() {
  return (
    <>
    <section className={classes.sect2}>
      <div className={classes.container}>
            <div className={classes.left_container}>
                <h3>Supplement.</h3>
                <p>Nine powerful ingredients.<br/> One ultimate formula.</p>
                <div className={classes.knopki}>
                  <button>SUPPLEMENT</button>
                  <button>LASER</button>
                </div>
            </div>
             <div className={classes.right_container}>
                <h3>Laser.</h3>
                <p>Ultimate skin regeneration.<br/> A new dawn for beauty.</p>
                <div className={classes.knopki}>
                  <button>DISCOVER</button>
                  <button>BUY</button>
                </div>
            </div>
      </div>
    </section>
    </>
  )
}