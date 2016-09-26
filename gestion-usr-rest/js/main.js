
UserMan.Router = Backbone.Router.extend({
                      routes: {
                        "": "default", 
                        "new": "edit",
                        "edit/:id":"edit"
                      },
                      default:function(){
                        usuariosView.collection.fetch({reset:true});
                        usuariosView.render();
                        //UserMan.users = new UserMan.Collections.Users();
                        //new UserMan.Views.Users({collection:UserMan.users});
                        //UserMan.users.fetch();
                        //console.log(UserMan.users);
                      },
                      edit:function(id){
                        crearEditarUsuarios.render(id);
                        //new UserMan.Views.EditUserView({numObj:id});
                      }
                  });

var usuarios= new UserMan.Collections.Users();
var usuariosView = new UserMan.Views.Users({collection:usuarios});
var crearEditarUsuarios = new UserMan.Views.EditUserView();

var router = new UserMan.Router();
Backbone.history.start();
