import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//Redux store
import Store from '../imports/store/store.js';

//components
import App from '../imports/ui/components/App.jsx';

/**
 * Set the provider with store to App component
 */
function PhoneWord() {
    return (
        <Provider store={Store}>
            <App/>
        </Provider>
    );
}

/**
 * Meteor startup method for generating code
 */
Meteor.startup(() => {
    render(<PhoneWord />, document.getElementById('app'));
});