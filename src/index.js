class SubPub {
  constructor() {
    this.events = {};
  }
  subscribe(event, handler, context) {
    if (!context) {
      context = handler;
    }
    this.events[event].push(handler.bind(context));
  }
  publish(event, args) {
    this.events[event].forEach((handler) => {
      handler(args);
    });
  }
}
