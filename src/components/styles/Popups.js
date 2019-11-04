
const styles = {
    popup_overlay: {
        position: 'fixed',
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
    popup_panel: {
        width: 919,
        height: 147,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        // styling children
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }, 
    icon: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        color: 'white',
        backgroundColor: '#E9E7EF',
        alignSelf: 'flex-end',
        cursor: 'pointer'
    }
}

export default styles;