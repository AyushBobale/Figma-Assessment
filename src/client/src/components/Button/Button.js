import react from 'react'
import './Button.css'

function Button(props) {
    return (
        <div className='nav-btn'>
            <a href="#" className="c-button ">
                <span>{props.icon}</span>
                <span>{props.text}</span>
            </a>

        </div>

        )
}

export default Button;