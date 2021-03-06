import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart({ email, password });
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({
            ...userCredentials,
            [name]: value
        });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label="email" type="email" name="email" value={email} required />
                <FormInput handleChange={handleChange} label="password" type="password" name="password" value={password} required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>

        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: ({ email, password }) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);