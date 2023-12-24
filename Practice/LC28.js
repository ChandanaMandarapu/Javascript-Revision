// chatgpt help

class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        const callbackWrapper = (...args) => callback(...args);

        this.events[eventName].push(callbackWrapper);

        const subscriptionIndex = this.events[eventName].length - 1;

        return {
            unsubscribe: () => {
                this.events[eventName].splice(subscriptionIndex, 1);
            }
        };
    }

    emit(eventName, args = []) {
        const eventCallbacks = this.events[eventName] || [];
        const results = eventCallbacks.map(callback => callback(...args));

        return ['emitted', results];
    }
}

// Test cases
const actions1 = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"];
const values1 = [[], ["firstEvent"], ["firstEvent", (...args) => args[0] + 1], ["firstEvent", (...args) => args[0] + 2], ["firstEvent"]];
const emitter1 = new EventEmitter();
const output1 = [];
for (let i = 1; i < actions1.length; i++) {
    if (actions1[i] === "subscribe") {
        const { unsubscribe } = emitter1.subscribe(...values1[i]);
        output1.push(["subscribed"]);
    } else if (actions1[i] === "unsubscribe") {
        const result = emitter1.unsubscribe(...values1[i]);
        output1.push(["unsubscribed", result]);
    } else {
        const result = emitter1.emit(...values1[i]);
        output1.push(result);
    }
}
console.log(output1);

const actions2 = ["EventEmitter", "subscribe", "emit", "emit"];
const values2 = [[], ["firstEvent", (...args) => args.join(',')], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]];
const emitter2 = new EventEmitter();
const output2 = [];
for (let i = 1; i < actions2.length; i++) {
    if (actions2[i] === "subscribe") {
        const { unsubscribe } = emitter2.subscribe(...values2[i]);
        output2.push(["subscribed"]);
    } else if (actions2[i] === "unsubscribe") {
        const result = emitter2.unsubscribe(...values2[i]);
        output2.push(["unsubscribed", result]);
    } else {
        const result = emitter2.emit(...values2[i]);
        output2.push(result);
    }
}
console.log(output2);

const actions3 = ["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"];
const values3 = [[], ["firstEvent", (...args) => args.join(',')], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]];
const emitter3 = new EventEmitter();
const output3 = [];
for (let i = 1; i < actions3.length; i++) {
    if (actions3[i] === "subscribe") {
        const { unsubscribe } = emitter3.subscribe(...values3[i]);
        output3.push(["subscribed"]);
    } else if (actions3[i] === "unsubscribe") {
        const result = emitter3.unsubscribe(...values3[i]);
        output3.push(["unsubscribed", result]);
    } else {
        const result = emitter3.emit(...values3[i]);
        output3.push(result);
    }
}
console.log(output3);

const actions4 = ["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"];
const values4 = [[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]];
const emitter4 = new EventEmitter();
const output4 = [];
for (let i = 1; i < actions4.length; i++) {
    if (actions4[i] === "subscribe") {
        const { unsubscribe } = emitter4.subscribe(...values4[i]);
        output4.push(["subscribed"]);
    } else if (actions4[i] === "unsubscribe") {
        const result = emitter4.unsubscribe(...values4[i]);
        output4.push(["unsubscribed", result]);
    } else {
        const result = emitter4.emit(...values4[i]);
        output4.push(result);
    }
}
console.log(output4);

