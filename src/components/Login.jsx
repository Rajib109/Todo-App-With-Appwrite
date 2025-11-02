const Login = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:pl-10">
                    <h1 class="text-5xl font-bold">Sign up now!</h1>
                    <p class="py-6">
                        Join our community today! Create your account to get started and explore
                        all the features. It's quick and easy.
                    </p>
                </div>
                <div class="card shadow-2xl bg-base-100 w-full max-w-md shrink-0">
                    <form class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                class="input input-bordered"
                                required
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                class="input input-bordered"
                                required
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                class="input input-bordered"
                                required
                            />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Sign Up</button>
                        </div>
                        <div class="text-center mt-4">
                            <a href="#" class="label-text-alt link link-hover">
                                Already have an account? Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
