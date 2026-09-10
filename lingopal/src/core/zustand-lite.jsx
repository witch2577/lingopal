// ========== Lightweight Zustand-compatible store implementation ==========
// Simple React state store with subscription + selector support
// Mirrors zustand's `create` API

(function() {
  const { useSyncExternalStore, useRef, useEffect, useState, useMemo } = React;

  function createStore(createState) {
    let state;
    const listeners = new Set();

    const setState = (partial, replace) => {
      const nextState = typeof partial === 'function' ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = replace ? nextState : { ...state, ...nextState };
        listeners.forEach(listener => listener(state, previousState));
      }
    };

    const getState = () => state;

    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };

    const destroy = () => {
      listeners.clear();
    };

    const api = { setState, getState, subscribe, destroy };
    state = createState(setState, getState, api);
    return api;
  }

  function useStore(api, selector) {
    const getSnapshot = () => selector ? selector(api.getState()) : api.getState();
    return useSyncExternalStore(
      api.subscribe,
      getSnapshot,
      getSnapshot
    );
  }

  function create(createStateOrApi) {
    const api = createStore(createStateOrApi);

    const useBoundStore = (selector) => useStore(api, selector);

    Object.assign(useBoundStore, api);
    return useBoundStore;
  }

  window.zustand = { create };
})();
