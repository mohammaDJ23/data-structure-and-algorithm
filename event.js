class EventSystem {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
      return;
    }

    this.events[eventName] = [callback];
  }

  trigger(eventName) {
    if (this.events[eventName]) {
      for (const callback of this.events[eventName]) {
        callback();
      }
    }
  }

  off(eventName) {
    delete this.events[eventName];
  }
}

const e = new EventSystem();

e.on('click', () => console.log('first click'));
e.on('click', () => console.log('second click'));

e.trigger('click');
