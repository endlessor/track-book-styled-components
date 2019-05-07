import configureStore from '../store/configureStore';

import initialStore from '../store/initialStore';

const store = configureStore(initialStore);

export default store;