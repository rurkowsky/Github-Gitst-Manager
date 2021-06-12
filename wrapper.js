const axios = require('axios');

class Wrapper {
  constructor(token) {
    this.token = token
    this.client = axios.create({
      baseURL: 'https://api.github.com/',
      responseType: 'json',
      headers: {
        'X-Custom-Header': this.token,
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + this.token
      }
    })
  }

  getRequest(path) {
    return this.client.get(path)
  }

  postRequest(path, payload) {
    return this.client.post(path, payload)
  }

  root() {
    return this.getRequest('/')
  }

  createGist(payload) {
    return this.postRequest('/gists', payload)
  }

  getGist(gistId) {
    return this.getRequest(`/gists/${gistId}`)
  }
}
let token = " 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"
let ghWrapper = new Wrapper(token)
let gistPayload = {
  "description": "Hello World Examples",
  "public": true,
  "files": {
    "hello_world.rb": {
      "content": "class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi"
    },
    "hello_world.py": {
      "content": "class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()"
    },
    "hello_world_ruby.txt": {
      "content": "Run `ruby hello_world.rb` to print Hello World"
    },
    "hello_world_python.txt": {
      "content": "Run `python hello_world.py` to print Hello World"
    }
  }
}

//ghWrapper.root().then((response) => console.log(response.data))
//ghWrapper.getGist('<< GIST ID>>').then((response) => console.log(response.data))
ghWrapper.createGist(gistPayload).then((response) => console.log(response.data))