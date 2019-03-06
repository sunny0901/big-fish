import { background } from '../../constants'

const styles = {
    contanier: {
        width: '100vw',
        backgroundColor: background,
        //display
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    panel: {
        width: 900,
        marginTop: 20,
        backgroundColor: '#ffffff',
        //display
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
}

export default styles;