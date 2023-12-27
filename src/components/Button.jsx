import styles from './Button.module.css'
import propTypes from 'prop-types'

function Button({children,onClick,type}) {
        return (
                <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
                    {children}
                </button>
        )
}

export default Button;

Button.propTypes={
        children:propTypes.node.isRequired,
        onClick:propTypes.func,
        type:propTypes.oneOf(['primary','secondary','position'])
}
