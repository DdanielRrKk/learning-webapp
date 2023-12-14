import styles from './Footer.module.css';

function Footer() {
	return (
		<footer>
			<div className={styles.links}>
				<div>
					<h2>LOGO</h2>
					<h4>SLOGAN COMPANY</h4>
				</div>
				<div>
					<p>SERVICES</p>
					<p>SUPPORT</p>
				</div>
				<div>
					<p>AFFILIATES</p>
					<p>RESOURCES</p>
				</div>
				<div>
					<p>ABOUT US</p>
					<p>CONTACT US</p>
				</div>
			</div>

			<hr />

			<div className={styles.icons}>
				<div>
					<p>Facebook</p>
					<p>Twitter</p>
					<p>Instagram</p>
					<p>Linkedin</p>
				</div>
				<p>&copy;2023. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
