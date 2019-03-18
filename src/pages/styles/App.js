import background_image from '../../assets/images/background.jpg';
import {
    themeColor,
    silverColor,
    yaQingColor,
}from '../../constants';

const styles = {
    container: {
        //background
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        //items in it
        display: 'flex',
        justifyContent: 'center',
    },
    panel: {
        marginTop: 60,
        width: 500,
        height: 600,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        color: themeColor,
        fontSize: 50,
        fontFamily: 'RussoOne',
        marginTop: 46,
        marginBottom: 32,
    },
    placeholder: {
        flex: 1,
    },
    footer: {
        width: 500,
        height: 118,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: silverColor,
    },
    footer_text: {
        fontSize: 25,
        color: yaQingColor,
    },
    footer_login: {
        fontSize: 25,
        color: themeColor,
    },
};

export default styles; //why cant export directly?