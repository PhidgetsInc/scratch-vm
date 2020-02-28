
class Scratch3Phidget22LibraryBlocks{
    constructor(runtime){
        this.runtime = runtime;
        var conn_opts = { name: "PhidgetServer", passwd: "",  onConnect: this._onConnect };

        //Timeout required to allow time for jQuery to load the Phidget22 library script before any calls
        setTimeout(function(){
            
            this.phid22conn = new phidget22.Connection(8989, "localhost", conn_opts );
            //var phid22conn = new phidget22.Connection("phid://" + args.HOSTNAME + ":" + args.PORT, conn_opts);

            this.phid22conn.connect().then(function(){
                return true;
            }).catch(function(err){
                console.log("not connected: " + err);
                console.log(err);
                return false;
            })
        }, 5000);
    }

    _onConnect(){
        console.log("Connected to NetworkServer!");
    };
}


module.exports = Scratch3Phidget22LibraryBlocks;
