import react from 'react'
import './Button.css'

function Button(props) {
    return (
        <div className='nav-btn'>
            <a href="#" className="c-button">
                <div>{props.icon}</div>
                <div>{props.text}</div>
            </a>

        </div>

        )
}

export default Button;