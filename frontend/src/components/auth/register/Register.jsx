import React from 'react';
import '../register/register.css'

const Register = () => {
  return (
    <div className="register-container">
      <div className="form-container">
        <h1>Sign up</h1>
        <form>
          <input type="text" placeholder="John Doe" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input type="password" placeholder="Repeat your password" name="repeat-password" />
          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree all statements in <a href="#">Terms of service</a>
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="already-member">I am already member</p>
      </div>
      <div className="image-container">
        <img src="your-image-url-here" alt="Illustration" />
      </div>
    </div>
  );
};

export default Register;
