import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    console.log("Author")
    var promise = new Promise((resolve, reject) => {
      resolve({
        // access_token: "cranked",
        // user_id: "my user"
      })
    })
    return promise;
  }
});