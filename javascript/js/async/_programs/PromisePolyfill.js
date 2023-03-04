https://www.youtube.com/watch?v=1l4wHWQCCIc

// generate by chatgpt - 
if (!window.Promise) {
    window.Promise = function(executor) {
      var self = this;
      self.status = 'pending';
      self.value = undefined;
      self.onResolvedCallback = [];
      self.onRejectedCallback = [];
  
      function resolve(value) {
        setTimeout(() => {
          if (self.status === 'pending') {
            self.status = 'resolved';
            self.value = value;
            self.onResolvedCallback.forEach(cb => cb(value));
          }
        });
      }
  
      function reject(reason) {
        setTimeout(() => {
          if (self.status === 'pending') {
            self.status = 'rejected';
            self.value = reason;
            self.onRejectedCallback.forEach(cb => cb(reason));
          }
        });
      }
  
      try {
        executor(resolve, reject);
      } catch (e) {
        reject(e);
      }
    };
  
    Promise.prototype.then = function(onResolved, onRejected) {
      var self = this;
      var promise2;
      onResolved = typeof onResolved === 'function' ? onResolved : v => v;
      onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r };
  
      if (self.status === 'resolved') {
        return promise2 = new Promise(function(resolve, reject) {
          try {
            var x = onResolved(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
  
      if (self.status === 'rejected') {
        return promise2 = new Promise(function(resolve, reject) {
          try {
            var x = onRejected(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
  
      if (self.status === 'pending') {
        return promise2 = new Promise(function(resolve, reject) {
          self.onResolvedCallback.push(function(value) {
            try {
              var x = onResolved(value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
  
          self.onRejectedCallback.push(function(reason) {
            try {
              var x
  