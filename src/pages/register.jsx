import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {


	const navigate = useNavigate();
const {logInWithGoogle, createUser, UserProfileUpdate, user, setUser } = useContext(AuthContext);
const location = useLocation()
const from = location.state || '/'


const handleSignUp = async e => {
	e.preventDefault()
	const form = e.target 
	
	const photo = form.photo.value
	const name = form.name.value
	const email = form.email.value  
	const pass = form.password.value 

	console.log({email,name,pass,photo});

	const mLength = 6;
    const capitalLetter = /[A-Z]/.test(pass);
    const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/.test(
      pass
    );

    if (pass.length < mLength) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!capitalLetter) {
      toast.error("Password must contain at least one capital letter.");
      return;
    }
    if (!specialCharacter) {
      toast.error("Password must contain at least one special character.");
      return;
    }

		try{
			const result = await createUser(email,pass)
			console.log(result);
			await UserProfileUpdate(name,photo)
			setUser({...user, photoURL: photo, displayName: name})
			navigate(from,{replace:true})
			toast.success('registration succesfull')
		} catch(err) {
			console.log(err)
			toast.error(err?.message)
		}

}


	const handleGoogleSignIn = async() => {
		try{
		await logInWithGoogle()
		toast.success('login succesfull')
		navigate(from,{replace:true})
		} catch(err) {
		console.log(err)
		toast.error(err.message)
	
		}
	}

    return (
        <div className="flex md:flex-row-reverse flex-col  gap-4 my-12">
            <div className="">
                <img src="https://i.ibb.co/5xDDrsV/image-processing20210901-27236-3mb5nl.gif" alt="" />
            </div>

             <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
	<h2 className="mb-3 text-3xl font-semibold text-center">Create a new account here</h2>
	<p className="text-sm text-center dark:text-gray-600">Already have an account?
		
        <Link to={'/login'}  className="focus:underline hover:underline text-blue-400 ml-2">login here</Link>
	</p>
	<div className="my-6 space-y-4">
		<button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
	<form onSubmit={handleSignUp} noValidate="" action="" className="space-y-8">
		
        
        <div className="space-y-4">
			
        <div className="space-y-2">
				<label htmlFor="photo" className="block text-sm">photo url</label>
				<input type="text" name="photo" id="photo" placeholder="add image url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
            <div className="space-y-2">
				<label htmlFor="name" className="block text-sm">name</label>
				<input type="text" name="name" id="name" placeholder="type name here..." className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>

            <div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="somwthing@email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			</div>
            
		</div>
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-700  text-white dark:bg-violet-600 dark:text-gray-50">register</button>
	</form>
            </div>
        </div>
    );
};

export default Register;