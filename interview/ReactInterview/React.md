Different state management ways
how would you go about passing data across multiple levels of depth, without passing it from component to component?

When do you deploy state vs. refs?
What are some gotchas of useEffect?
Under what conditions should you optimise using memo / callback?

## Rsources

https://medium.com/@_ericelliott?p=62837cb2fd76

## Notes

https://twitter.com/dan_abramov/status/1157250198659354624?lang=en
The mental model is synchronization. Not lifecycle.
The question is not "when does this effect run" the question is "with which state does this effect synchronize with"

useEffect(fn) // all state
useEffect(fn, []) // no state
useEffect(fn, [these, states])

https://twitter.com/housecor/status/1437765667906854915?cxt=HHwWhoC5nbyQ_PMnAAAA

## Redux

Middleware isn't required to support async in redux.
It makes handling async more elegant because you don't have to pass dispatch to each call.
Without middleware your component have to know which action creators are async, since they must pass dispatch down to the action creator.
Our components can call async action same way as they call sync actions (with thunk)

In summary, here's the three reasons to use async middleware.

- It means that all your action calls are consistent. Without middleware, the signature of our dispatch calls would differ depending on whether they were synchronous or asynchronous. - - Async middleware like redux‑thunk also helps keep our code pure. It avoids binding our code to side effects,
- and this makes testing our React components easier as well. So you don't have to use async middleware, but the vast majority of people do.
