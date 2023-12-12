class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  unsubscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
    }
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(data));
    }
  }
}

const emitter = new EventEmitter();

const callback1 = (data) => console.log(`Callback 1: ${data}`);
const callback2 = (data) => console.log(`Callback 2: ${data}`);

emitter.subscribe('event', callback1);
emitter.subscribe('event', callback2);

emitter.emit('event', 'Hello, world!');

emitter.unsubscribe('event', callback1);

emitter.emit('event', 'Updated message!');
