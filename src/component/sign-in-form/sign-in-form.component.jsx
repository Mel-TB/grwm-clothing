import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form-styles.scss';

const SignInForm = () => {
	const defaultFormFields = {
		email: '',
		password: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				case 'auth/wrong-password':
					alert('incorrect password');
					break;
				default:
					console.error(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email or with your Google account</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					onChange={handleChange}
					name="email"
					value={email}
					required
				/>

				<FormInput
					label="Password"
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
					required
				/>
				<div className="buttons-container">
					<Button type="submit" buttonType="inverted">
						Sign In
					</Button>
					<Button type="button" buttonType="google" onClick={signInWithGoogle}>
						Google Sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
