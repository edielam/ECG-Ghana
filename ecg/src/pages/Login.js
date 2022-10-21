import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='container mt-4' style={{ maxWidth: '400px' }}>
        <h2>Admin Login</h2>
        <hr />
        <form >
          <div className="form-group">
            <label htmlFor="email">Admin Username</label>
            <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
            
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    )
}

export default Login;