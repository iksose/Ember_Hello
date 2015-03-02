import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore: function(data) {
    console.log("restore");
    var promise = new Promise((resolve, reject) => {
      resolve({
        access_token: "cranked",
        user_id: "my user"
      })
    })
    return promise;
  },
  authenticate: function(options) {
    console.log("auth");
    var promise = new Promise((resolve, reject) => {
      resolve({
        access_token: "cranked",
        user_id: "my user"
      })
    })
    return promise;
  },
  invalidate: function(data) {
    console.log("invalidate");
    var promise = new Promise((resolve, reject) => {
      resolve("yay")
    })
    return promise;
  }
});