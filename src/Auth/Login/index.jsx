import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css"
const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("sa")
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			localStorage.setItem("userData", res.userData);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="content">
			<div className="container">
				<div className="row">
					<div className="col-md-6 d-flex justify-content-center mb-5">
						<img src="https://hive.com/wp-content/uploads/2020/08/undraw_remotely_2j6y.png" alt="Imasdage" className="img-fluid" />
					</div>
					<div className="col-md-6 contents">
						<div className="row justify-content-center">
							<div className="col-md-8">
								<div className="mb-4">
									<h3>Daxil Ol</h3>
								</div>
								<form action="#" onSubmit={handleSubmit} >
									<div className="form-group a first">

										{/* <input type="text" className="form-control input a" id="username" placeholder='Email' required onChange={handleChange}
											value={data.email} /> */}
										<input
											type="email"
											placeholder="Email"
											name="email"
											onChange={handleChange}
											value={data.email}
											required
											className="input form-control input a"
										/>
									</div>
									<div className="form-group last mb-4">
										<input
											type="password"
											placeholder="Password"
											name="password"
											onChange={handleChange}
											value={data.password}
											required
											className="input color-white a input form-control"
										/>
									</div>

									{error && <div className="error_msg">{error}</div>}

									<div className="d-flex mb-3 align-items-center">

									</div>
									<p className='mb-4'>
										Hesabınız Yoxdur?
										<Link style={{ 'textDecoration': 'none' }} to='/signup'>&nbsp; &nbsp;Qeydiyyatdan Keçin</Link>
									</p>

									<input type="submit" value="Daxil Olun" className="login " />


								</form>

							</div>
						</div>

					</div>

				</div>
			</div>
		</div>

	);
};

export default Login;

// <section class="h-100 gradient-form" style={{ "background-color": "#eee;" }}>
// 	<div class="container py-5 h-100">
// 		<div class="row d-flex justify-content-center align-items-center h-100">
// 			<div class="col-xl-10">
// 				<div class="card rounded-3 text-black">
// 					<div class="row g-0">
// 						<div class="col-lg-6">
// 							<div class="card-body p-md-5 mx-md-4">

// 								<div class="text-center">
// 									<img src="https://www.freeiconspng.com/uploads/logo-design-blank-circle-blue-and-orange-png-2.png"
// 										style={{ "width": "65px" }} alt="logo" />
// 									<h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
// 								</div>

// 								<form onSubmit={handleSubmit}>
// 									<p>Please login to your account</p>

// 									<div class="form-outline mb-4">
// 										<label class="form-label" for="form2Example11">Username</label>
// 										<input
// 											type="email"
// 											placeholder="Email"
// 											name="email"
// 											onChange={handleChange}
// 											value={data.email}
// 											required
// 											className="input form-control"
// 										/>
// 									</div>

// 									<div class="form-outline mb-4">
// 										<label class="form-label" for="form2Example22">Password</label>
// 										<input
// 											type="password"
// 											placeholder="Password"
// 											name="password"
// 											onChange={handleChange}
// 											value={data.password}
// 											required
// 											className="input form-control"
// 										/>
// 									</div>
// 									{error && <div className="error_msg">{error}</div>}

// 									<div class="text-center pt-1 mb-5 pb-1">
// 										<button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">
// 											Login
// 										</button>
// 										<a class="text-muted" href="#!">Forgot password?</a>
// 									</div>

// 									<div class="d-flex align-items-center justify-content-center pb-4">
// 										<p class="mb-0 me-2">Don't have an account?</p>
// 										<button type="button" class="btn btn-outline-danger">Create new</button>
// 										<Link to="/signup">
// 											<button type="button" className="btn btn-outline-danger ">
// 												Sign Up
// 											</button>
// 										</Link>
// 									</div>

// 								</form>

// 							</div>
// 						</div>
// 						<div class="col-lg-6 d-flex align-items-center gradient-custom-2">
// 							<div class="text-white px-3 py-4 p-md-5 mx-md-4">
// 								<h4 class="mb-4">We are more than just a company</h4>
// 								<p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// 									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>