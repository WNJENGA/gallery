var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://wnjenga:fjoUjOUbNvDNwejg@cluster0.pfmjony.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://wnjenga:fjoUjOUbNvDNwejg@cluster0.pfmjony.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://wnjenga:fjoUjOUbNvDNwejg@cluster0.pfmjony.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
