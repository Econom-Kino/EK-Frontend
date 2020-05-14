import React from 'react';
import Anonces from '../Anonces/Anonces';
import Cinemas from '../Cinemas/Cinemas';
import Data from '../Data/Data';


class MainPage extends React.Component {


    render() {
        return (
            <div>

                <Data state={this.props.state} store={this.props.store} />

                <Anonces state={this.props.state} store={this.props.store} />

                <Cinemas />

            </div>
        )
    }
}

export default MainPage;