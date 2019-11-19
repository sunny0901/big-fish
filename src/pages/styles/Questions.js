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
    scrollable: {
        // styling self
        flex: 1,
        alignSelf: 'stretch',
        overflow: 'auto',
        // styling children
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    panel: {
        width: 900,
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 23,
        paddingBottom: 20,
        backgroundColor: '#ffffff',
        //display
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    // styling add question popup
    container_addQuestion: {
        position: 'absolute',
        top: 0, bottom: 0, left:0, right:0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(215, 215, 215, 0.5)',
        // opacity: 0.5, opacity will pass to it children 
        // styling children
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    panel_addQuestion: {
        position: 'relative',
        width: 900,
        height: 400,
        backgroundColor: 'white',
        // styling children
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    input_add_question: {
        width: 700,
    },
    button_add_question: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 25,
        right: 100
    }
}

export default styles;