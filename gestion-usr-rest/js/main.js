
UserMan.Router = Backbone.Router.extend({
                      routes: {
                        "": "default", 
                        "new": "edit",
                        "edit/:id":"edit"
                      },
                      default:function(){
                        UserMan.users = new UserMan.Collections.Users();
                        new UserMan.Views.Users({collection:UserMan.users});
                        //UserMan.users.fetch();
                        //console.log(UserMan.users);
                      },
                      edit:function(id){
                        new UserMan.Views.EditUserView({numObj:id});
                      }
                  });

var router = new UserMan.Router();
Backbone.history.start();
