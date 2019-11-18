
        // queries 
const qs = require('querystring')
const url = require('url')
   //     

module.exports = {
    serverHandle: function (req, res) {
        // Import Node url module
        const route = url.parse(req.url)
        const params = qs.parse(route.query)
        const path = route.pathname 
        
    
        res.writeHead(200, {'Content-Type': 'text/plain'});
        
        if (path === '/') {
            res.write('Welcome in the first App : \n\n'+
            'path /hello to display the -hello name- mode\n \n'+
            'path to be completed with parameter NAME :\n'+
            'if name = myName, you\'ll lean something about me\n'+
            'if name = otherName : \'hello otherName\' \n'+
            'else : error 404')
        }
        
        else if (path === '/hello'){
            if('name' in params){
    
                if(params['name']=='Adrien'){
                    res.write('Well done! Ypu\'ve found my name!\n\n'+
                    'My name is Adrien, '+
                    'I\'m the presient of Yacht Club union at ECE Paris.')
                }
                else{
                    res.write('Hello ' + params['name'])
                }
            }
              
            else {
                res.write('Hello there :))')
            }
        }
        
        else{
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.write('Error 404')
        }
        res.end();
    }
}