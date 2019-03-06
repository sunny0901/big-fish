import { background } from '../../constants'

const styles = {
    contanier: {
        width: '100vw',
        height: '100vh',
        backgroundColor: background,
        //display
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    panel: {
        width: 900,
        height: 200,
        marginTop: 20,
        backgroundColor: '#ffffff',
        //display
        display: 'flex',
        justifyContent: 'center',
    }
}

export default styles;