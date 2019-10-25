import {
    themeColor,
}from '../../constants';

const styles = {
    button: {
        width: 386,
        height: 50,
        backgroundColor: themeColor,
        borderRadius: 5,
        border: 'none',
        cursor: 'pointer',
        fontSize: 25,
        color: 'white',
    },
    container_float_button: {
        // styling self
        width: 50,
        height: 50,
        backgroundColor: themeColor,
        borderRadius: 25,
        position: 'fixed',
        right: 25,
        bottom: 25,
        cursor: 'pointer',
        // styling children
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 35,
        height: 35,
    }
};

export default styles;