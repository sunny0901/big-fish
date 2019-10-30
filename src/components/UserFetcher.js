
import { connect } from 'react-redux';

function UserFetcher({ id, user, getUser, children }) {
    !user && getUser(id);
    // return {} when user not found to avoid undefined.
    
    return children(user || {});
}

const mapState = (state, ownProps) => ({
    user: state.users[ownProps.id]
})

const mapDispatch = dispatch => ({
    getUser: id => dispatch.users.getUser(id)
})

export default connect(mapState, mapDispatch)(UserFetcher)