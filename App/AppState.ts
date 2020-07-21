// it figures out which component to load
// it loads appropriate component based on url
// it supplies basic and global state and methods

import { currentContext } from "vuerx-jsx";

// app component => bootstraps the app 



// list of all the views (routes)
enum Routes  {
    newsFeed,
    users,
    photos,
    messages,
}

export let appState = {
    currentRoute: null
}

function loadView(path) {
    if (!path) {
        path = location.pathname;
    }
   let routeParams = path.split("/");
    let view = routeParams[1];
    if (path === "/")
        appState.currentRoute = Routes.users;
    else if (Routes[view])
        appState.currentRoute = view;
    else //404
        // view can be username
        appState.currentRoute = "user"
}

