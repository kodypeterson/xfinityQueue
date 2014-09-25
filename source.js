var xfinityQueue = {
  storage: null,
  addToWatchList: function(tooltipID){
    console.log(tooltipID);
  },
  saveStorage: function(){
    localStorage.setItem("xfinityQueue", storage);
  },
  init: function(){
    xfinityQueue.storage = localStorage.getItem("xfinityQueue");
    if(xfinityQueue.storage === null){
      xfinityQueue.storage = {
        shows: {}
      }
    }
    console.log(xfinityQueue.storage);
    var loadCSS = function(file){
      link = document.createElement( "link" );
      link.href = file;
      link.type = "text/css";
      link.rel = "stylesheet";
      link.media = "screen,print";

      document.getElementsByTagName( "head" )[0].appendChild( link );
    }
    loadCSS("http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css");
    document.addEventListener("DOMNodeInserted", function(event){
      if($(event.target).hasClass("tooltip")){
        console.log("tooltip");
        var action = 'xfinityQueue.addToWatchList(\''+$(event.target).attr("id")+'\')';
        var icon = "ion-plus-circled";
        var showName = $(".header .ellipsis", event.target).text();
        if(xfinityQueue.storage.shows[showName] !== undefined){
          // we are already watching this show
          action = 'xfinityQueue.removeFromWatchList(\''+$(event.target).attr("id")+'\')';
          icon = "ion-trash-a";
        }
        $(".buttons", event.target).append('<span class="add" style="margin-left: 10px"><a onclick="'+action+'" class="button watchlist watchlist-button add small lite" name="Gotham" title="Add to XfinityQueue"><i class="'+icon+'" style="font-size: 20px;vertical-align: middle;padding-right: 5px;"></i><span>XfinityQueue</span></a></span>');
      }
    });
  }
}
xfinityQueue.init();