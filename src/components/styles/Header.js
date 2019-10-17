import { shellColor, themeColor } from '../../constants'

const styles = {
    container: {
        width: '100vw',
        height: 80,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid' + shellColor,
        boxShadow: '0 1px 5px 1px' + shellColor,
        //display
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        color: themeColor,
        marginLeft: 19,
        cursor: 'pointer'
    },
    
    img: {
        width: 49,
        height: 48,
        borderRadius: '50%',
        marginRight: 24,
    }
}

export default styles;