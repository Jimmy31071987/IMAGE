var USER_DISHES_SCRIPTS_IMAGES = USER_DISHES_SCRIPTS_IMAGES || {};
USER_DISHES_SCRIPTS_IMAGES.JS_FILE=function(f) {
    
   this.obj=new Object();
   this.obj.file=f;
   this.obj.result="";
   this.obj.size="";
   this.obj.type="";
   this.obj.name="";
   this.isIMAGE=(function(){
                            try{
                                if(this.obj!==null){
                                    this.obj.name=this.obj.file.name;
                                    this.obj.size=(parseInt(this.obj.file.size)/1024)/1024;
                                    this.obj.type=this.obj.file.type;
                                    if(this.obj.type==="image/jpeg"){
                                        return true;}else{return false;}
                                        }
                                 else{return null;}
                              }
                              catch(e){return e;}
                             });
    this.isSIZELIMIT=(function(){
                             try{
                                if(this.obj!==null){
                                    this.obj.size=(parseInt(this.obj.file.size)/1024)/1024;
                                    if(this.obj.size<=1){
                                        return true;}else{return false;}
                                        }
                                 else{return null;}
                              }
                              catch(e){return e;}
                        
                        });                         
    this.TYPE=(function(){return this.obj.type;});
    this.SIZE=(function(){return this.obj.size;});
    this.NAME=(function(){return this.obj.name;});
    
};
USER_DISHES_SCRIPTS_IMAGES._js_IMAGE_ONCHANGE=function(element){
    try{
        var file=(element).files[0];
        var obj=new this.JS_FILE(file);
        if(obj.isIMAGE()){
           if(!obj.isSIZELIMIT()){console.log("SIZE EXCEEDED");}
           else{
               var files=new FileReader();
               files.onloadend=function(e){
                   console.log(e.target.result);
               }
               files.readAsBinaryString(file);
           }
        }
        else{console.log("Only JPEG Files");}
    }
    catch(e){
        /*BUG*/
        console.log(e);
    }
};
