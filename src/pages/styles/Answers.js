const styles = {
    panel: {
        width: 900,
        paddingTop: 23,
        paddingBottom: 20,
        backgroundColor: '#ffffff',
        //display
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    addContainer: {
        position: 'relative',
        width: 900,
        height: 279,
        backgroundColor: 'white',
        marginBottom: 20,
        // styling children
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    add_answer_content: {
        width: 842
    },
    add_answer_button: {
        position: 'relative',
        alignSelf: 'flex-end',
        bottom: 14,
        right: 29
    }
}

export default styles;