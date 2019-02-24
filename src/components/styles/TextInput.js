import {
    shellColor, themeColor,
}from '../../constants';

const styles = {
    container: {
        width: 386,
        height: 51,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    input: {
        width: 386,
        borderWidth: 0,
        fontSize: 25,
        marginBottom: 4.5,
        outline: 'none',
        padding: 0,
    },
    line: {
        borderBottom: '1px solid',
    },
    err_mess: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: themeColor,
    }
};

export default styles;