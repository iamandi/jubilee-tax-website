import React from 'react'
import Link from 'next/link'

const Custom500 = () => {
	return (
		<div className="error-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="error-content">
							<div className="notfound-404">
								<h1>Oops!</h1>
							</div>
							<h3>500 - Interal error</h3>
							<p>Well, this is embarrasing. Something went Wrong!</p>

							<Link href="/">
								<a className="btn btn-primary">Go to Homepage</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Custom500