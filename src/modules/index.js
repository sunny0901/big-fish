let ref = null;

const Popup = {
    open: (message) => ref && ref.open(message),
    close: () => ref && ref.close()
}

export const register = (_ref) =>  ref = _ref;

export default Popup;