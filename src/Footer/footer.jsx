import classes from '../Footer/footer.module.scss'
import { Photo } from "../Photo.js"
export default function Footer() {
  return (
    <>
   <footer>
    <div className={classes.big_container}>
        <div className={classes.right_container1}>
        <div className={classes.right_container2}>
            <div className={classes.kolonka}>
                <h2>SUPPLEMENT</h2>
                <ul>
                    <li>Benefits</li>
                    <li>Formula</li>
                    <li>Immunity</li>
                    <li>Journal</li>
                    <li>Reviews</li>
                    <li><span>Buy</span></li>
                </ul>
            </div>

            <div className={classes.kolonka}>
                <h2>LYMA LASER</h2>
                <ul>
                    <li>LYMA Laser</li>
                    <li>Active Mist</li>
                    <li>Priming Serum</li>
                    <li>Technology</li>
                    <li>Results</li>
                    <li>Journal</li>
                    <li>Reviews</li>
                    <li><span>Buy</span></li>
                </ul>
            </div>

            <div className={classes.kolonka}>
                <h2>ABOUT</h2>
                <ul>
                    <li>About</li>
                    <li>Journal</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Warranty</li>
                </ul>
            </div>

            <div className={classes.kolonka}>
                <h2>ACCOUNT</h2>
                <ul>
                    <li>Activate</li>
                    <li>My subscription</li>
                    <li>Add extras</li>
                    <li>My orders</li>
                    <li>Account details</li>
                    <li>Payment method</li>
                    <li>Login details</li>
                </ul>
            </div>
</div>
</div>
            <div className={classes.left_container}>
                <h2>NEWSLETTER</h2>
                <p>Subscribe to our newsletter.</p>
                <div className={classes.knopki}>
                    <button>LYMA Newsletter</button>
                    <button>SIGN UP</button>
                </div>
                <div className={classes.foto}>
                <img src={Photo.Frameug}/>
                </div>

                <p>© LYMA Life Ltd. 2021</p>
            </div>

    </div>
</footer>
    </>
  )
}